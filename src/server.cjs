const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const app = express();

// Enable CORS
app.use(cors());
app.use(express.json()); // to parse JSON bodies

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/infra", {
});

// Define the schema for the project including an image
const projectSchema = new mongoose.Schema({
  projectName: String,
  totalExtent: Number,
  landMark: String,
  imageUrl: String, // Save image URL/path
});

const Project = mongoose.model("building", projectSchema);

// Configure Multer for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueName = `abc_${Date.now()}_${file.originalname}`;
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only images are allowed!"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

// Serve static files in the 'uploads' folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// POST: Create a new project with an image
app.post("/api/uploads", upload.single("image"), async (req, res) => {
  try {
    const { projectName, totalExtent, landMark } = req.body;

    // Save the project details including the image URL
    const newProject = new Project({
      projectName,
      totalExtent,
      landMark,
      imageUrl: `/uploads/${req.file.filename}`, // Save image path
    });

    await newProject.save();
    res.status(201).json({ message: "Project saved successfully", project: newProject });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Retrieve all projects along with their images
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();

    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
