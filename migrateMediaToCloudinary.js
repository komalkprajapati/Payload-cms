import { MongoClient } from 'mongodb';
import { v2 as cloudinary } from 'cloudinary';
import fetch from 'node-fetch'; // make sure to install this: npm i node-fetch
import dotenv from 'dotenv';

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const MONGO_URI = process.env.DATABASE_URI;
const DATABASE_NAME = 'cms'; // replace if needed
const MEDIA_COLLECTION = 'media'; // your Payload Media collection slug

async function migrate() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db(DATABASE_NAME);
  const mediaCollection = db.collection(MEDIA_COLLECTION);

  const mediaRecords = await mediaCollection.find({}).toArray();
  console.log(`Found ${mediaRecords.length} media records.`);

  for (const record of mediaRecords) {
    if (!record.url) {
      console.log(`No URL for record ${record._id}, skipping...`);
      continue;
    }

    try {
      console.log(`Fetching ${record.url} ...`);
      const response = await fetch(record.url);

      if (!response.ok) {
        console.log(`Failed to fetch ${record.url}, skipping...`);
        continue;
      }

      const buffer = Buffer.from(await response.arrayBuffer());

      // Upload to Cloudinary
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: 'payload-media' }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
          })
          .end(buffer);
      });

      // Update MongoDB record with Cloudinary URL
      await mediaCollection.updateOne(
        { _id: record._id },
        { $set: { url: result.secure_url } }
      );

      console.log(`✅ Uploaded ${record.filename || record._id} → ${result.secure_url}`);
    } catch (err) {
      console.error(`❌ Error processing ${record._id}:`, err.message);
    }
  }

  await client.close();
  console.log('Migration complete.');
}

migrate();
