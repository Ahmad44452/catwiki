const mongoose = require("mongoose");

const breedSchema = new mongoose.Schema({
  breedId: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    required: [true, "Breed Name is required"],
    trim: true
  },
  referenceImage: {
    type: String
  },
  searches: {
    type: Number,
    default: 0
  }
});
// breedSchema.index({ '$**': 'text' });
// breedSchema.index({ breedName: "text" });
breedSchema.index({ name: 'text', 'name': 'text' });

const BreedModel = mongoose.model("Breed", breedSchema);
module.exports = { BreedModel };