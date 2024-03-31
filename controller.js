const location = require("./model");

// get all locations
const getlocations = async (req, res) => {
  try {
    const locations = await location.find({});
    res.status(200).json(locations);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "try again later" });
  }
};

// Add one location
const addlocation = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;
    const newlocation = new location({ name, address, latitude, longitude});
    await newlocation.save();
    res.status(201).json(newlocation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get location by ID
const getlocation = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await location.findById(id);
    if (!location) {
      return res.status(404).json({ message: "location not found" });
    }
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete location by ID
const deletelocation = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await location.findByIdAndDelete({ _id: id });
    if (!location) {
      return res.status(404).json({ message: "location not found" });
    }
    res.status(200).json({ message: "location deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete all locations
const deleteAlllocations = async (req, res) => {
  try {
    const result = await location.deleteMany({});
    res
      .status(200)
      .json({ message: `Deleted ${result.deletedCount} books successfully` });
} catch (error) {console.error("Error:", error.message);
res.status(500).json({ message: "try again later" });
}
 
};

// Update location by ID
const updatelocation = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedlocation = req.body;
    const location = await location.findOneAndUpdate({ _id: id }, updatedlocation);
    if (!location) {
      return res.status(404).json({ message: "location not found" });
    }
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getlocations,
  addlocation,
  getlocation,
  deletelocation,
  deleteAlllocations,
  updatelocation,
};