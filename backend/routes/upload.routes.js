// routes/uploadRoutes.js
import express from "express";
import  uploadImage from '../controllers/upload.controller.js';
const router = express.Router();

// POST route for image upload
router.post('/', uploadImage);

export default router;
