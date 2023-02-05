const express = require('express');
let router = express.Router();

///////////// GET USER MODEL
const { BreedModel } = require('../../models/breedModel');

router.route('/updatebreeds').get(async (req, res) => {
  try {
    return res.status(200).json({ working: true })
  } catch (error) {
    res.status(400).json({
      message: "Error",
      error: error
    })
  }
})



module.exports = router;