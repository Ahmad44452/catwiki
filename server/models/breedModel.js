const mongoose = require("mongoose");

const breedSchema = new mongoose.Schema({
  breedId: {
    type: String,
  },
  referenceImageId: {
    type: String,
  },
  searches: {
    type: Number,
    default: 0
  }
})

const BreedModel = mongoose.model("Breed", breedSchema);
module.exports = { BreedModel };