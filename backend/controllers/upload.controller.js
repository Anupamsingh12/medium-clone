// controllers/uploadController.js

import cloudinary from '../config/cloudinary.js';
import multer from 'multer';

// Set up multer for image upload handling
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image'); // 'image' is the field name in the form

const uploadImage = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: 'Error uploading file' });
    }

    try {
      // Check if the file is available in req.file (this assumes you're using multer)
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      // Upload the image directly to Cloudinary using the buffer
      const result = await cloudinary.uploader.upload_stream(
        { 
          resource_type: 'image', 
          public_id: req.file.originalname  // Optional: set a custom public_id if needed
        },
        (error, uploadResult) => {
          if (error) {
            return res.status(500).json({ error: 'Cloudinary upload failed', details: error });
          }

          // Return the URL of the uploaded image
          return res.status(200).json({
            message: 'Image uploaded successfully',
            url: uploadResult.secure_url,
          });
        }
      );

      // Pipe the buffer data into the upload stream
      result.end(req.file.buffer);
      
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error', details: error });
    }
  });
};



export default uploadImage;
