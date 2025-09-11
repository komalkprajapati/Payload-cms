const fs = require('fs');
const path = require('path');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const axios = require('axios');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Path to your local media folder
const MEDIA_FOLDER = path.join(__dirname, 'media');

// Your Payload API base URL
const PAYLOAD_API = process.env.PAYLOAD_API_URL || 'http://localhost:3000/api';

// Your Payload collection slug
const COLLECTION = 'media';

// If your Payload requires authentication, add a Bearer token
const AUTH_TOKEN = process.env.PAYLOAD_TOKEN || '';

async function uploadAndUpdate() {
  const files = fs.readdirSync(MEDIA_FOLDER);

  for (const file of files) {
    const filePath = path.join(MEDIA_FOLDER, file);

    try {
      // Upload file to Cloudinary
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'payload-media',
      });

      console.log(`${file} uploaded successfully: ${result.secure_url}`);

      // Find the media item in Payload by filename
      const res = await axios.get(`${PAYLOAD_API}/${COLLECTION}?where[filename][equals]=${file}`, {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      });

      const mediaItem = res.data.docs[0];
      if (mediaItem) {
        // Update Payload Media item with Cloudinary URL
        await axios.put(`${PAYLOAD_API}/${COLLECTION}/${mediaItem.id}`, {
          url: result.secure_url,
        }, {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        });
        console.log(`Payload updated for ${file}`);
      } else {
        console.log(`No media item found in Payload for ${file}`);
      }

    } catch (err: any) {
      console.error(`Error with ${file}:`, err.response?.data || err.message);
    }
  }
}

uploadAndUpdate();
