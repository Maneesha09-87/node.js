const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes")

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes


const PORT = 3000;
const MONGODB_URI = "mongodb+srv://ramapurammaneesha:TryBQ9egpWn8hCsG@cluster0.c0s2lps.mongodb.net"

// Define routes
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use("/",route)

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
  