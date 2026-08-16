const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to read JSON request bodies
app.use(express.json());

// Home endpoint
app.get("/", (req, res) => {
    res.send("Welcome to DevOps Notes API Version 2🚀");
});

// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        service: "devops-notes-api"
    });
});

// Get notes
app.get("/notes", (req, res) => {
    res.json([
        {
            id: 1,
            title: "Learn Docker",
            description: "Practice Docker commands"
        },
        {
            id: 2,
            title: "Learn AWS",
            description: "Deploy application on EC2"
        }
    ]);
});

// Create a note
app.post("/notes", (req, res) => {
    const { title, description } = req.body;

    res.status(201).json({
        message: "Note created successfully",
        note: {
            title,
            description
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
