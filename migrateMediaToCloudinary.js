import { MongoClient } from 'mongodb';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const MONGO_URI = process.env.DATABASE_URI;
const DATABASE_NAME = 'cms'; // Replace with your MongoDB DB name
const MEDIA_COLLECTION = 'media'; // Your Payload Media collection slug
const LOCAL_MEDIA_PATH = path.join(process.cwd(), 'media'); // Local media folder

async function migrate() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db(DATABASE_NAME);
  const mediaCollection = db.collection(MEDIA_COLLECTION);

  const mediaRecords = await mediaCollection.find({}).toArray();
  console.log(`Found ${mediaRecords.length} media records.`);

  for (const record of mediaRecords) {
    const localFile = path.join(LOCAL_MEDIA_PATH, record.filename); // filename field from Payload
    if (!fs.existsSync(localFile)) {
      console.log(`File not found: ${localFile}, skipping...`);
      continue;
    }

    try {
      const result = await cloudinary.uploader.upload(localFile, {
        folder: 'payload-media',
      });

      // Update Payload media record with Cloudinary URL
      await mediaCollection.updateOne(
        { _id: record._id },
        { $set: { url: result.secure_url } }
      );

      console.log(`Uploaded ${record.filename} → ${result.secure_url}`);
    } catch (err) {
      console.error(`Error uploading ${record.filename}:`, err.message);
    }
  }

  await client.close();
  console.log('Migration complete.');
}

migrate();
