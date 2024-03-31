const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getlocations,
  addlocation,
  getlocation,
  updatelocation,
  deletelocation,
  deleteAlllocations,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all locations
app.get("/locations", getlocations);

// POST a new location
app.post("/locations", addlocation);

// GET a single location
app.get("/locations/:id", getlocation);

// Update location using PUT
app.put("/locations/:id", updatelocation);

// DELETE a location
app.delete("/locations/:id", deletelocation);

// DELETE all location
app.delete("/locations", deleteAlllocations);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});