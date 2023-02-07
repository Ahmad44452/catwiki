const express = require('express');
let router = express.Router();

///////////// GET USER MODEL
const { BreedModel } = require('../../models/breedModel');


router.route('/updatebreeds').get(async (req, res) => {
  try {
    // Get all breeds data from API
    const breedDataApi = await fetch('https://api.thecatapi.com/v1/breeds').then(res => res.json());
    const breedDataWithImageURL = [];
    for (let breed of breedDataApi) {
      if (breed.reference_image_id) {
        const referenceImageData = await fetch(`https://api.thecatapi.com/v1/images/${breed.reference_image_id}`).then(res => res.json());
        breed.referenceImage = referenceImageData.url;
      }

      breedDataWithImageURL.push(updateBreedProps(breed))
    }

    // console.log(breedDataWithImageURL)

    await BreedModel.insertMany(breedDataWithImageURL, { ordered: false });

    return res.status(200).json("Breeds Updated")
  } catch (error) {

    if (error.code === 11000)
      return res.status(200).json("Breeds Updated!")

    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});

router.route('/topsearched').get(async (req, res) => {
  try {
    const topBreeds = await BreedModel.find().sort({ searches: -1 }).limit(10);

    return res.status(200).json(topBreeds);
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: "Error",
      error: error
    });
  }
});

router.route('/incrementsearched').post(async (req, res) => {
  try {

    const breed = await BreedModel.findOne({ breedId: req.body.id });
    if (!breed)
      return res.status(400).json("Breed not found")

    breed.searches++;
    breed.save();

    return res.status(200).json("Breed Searches Incremented");
  } catch (error) {

    return res.status(400).json({
      message: "Error",
      error: error
    });
  }
});

router.route('/search/:searchQuery').get(async (req, res) => {
  try {
    const searchQuery = req.params.searchQuery.toLowerCase();
    const breeds = await BreedModel.find().sort({ searches: -1 });
    let i = 0
    const filteredBreeds = breeds.filter(item => {
      if (item.name.toLowerCase().includes(searchQuery) && i < 10) {
        i++;
        return true;
      } else {
        return false;
      }

    })

    return res.status(200).json(filteredBreeds);
  } catch (error) {

    return res.status(400).json({
      message: "Error",
      error: error
    });
  }
});

router.route('/details/:breedId').get(async (req, res) => {
  try {
    const breedId = req.params.breedId;
    const breed = await BreedModel.findOne({ breedId: breedId });

    if (breed) {
      breed.searches++;
      await breed.save();
    }

    const breedDataApi = await fetch(`https://api.thecatapi.com/v1/breeds/${breedId}`).then(res => res.json());
    const resBreedData = breedDetailsProps(breedDataApi);

    resBreedData.referenceImage = breed.referenceImage;

    const imagesApiFetch = await fetch(`https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${breedDataApi.id}`).then(res => res.json());

    resBreedData.images = imagesApiFetch.map(item => item.url);

    return res.status(200).json(resBreedData);
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: "Error",
      error: error
    });

  }
});

const updateBreedProps = (breedObj) => ({
  breedId: breedObj.id,
  referenceImage: breedObj.referenceImage || null,
  name: breedObj.name
});

const breedDetailsProps = (breedObj) => ({
  id: breedObj.id,
  name: breedObj.name,
  description: breedObj.description,
  temperament: breedObj.temperament,
  origin: breedObj.origin,
  lifeSpan: breedObj.life_span,
  adaptability: breedObj.adaptability,
  affectionLevel: breedObj.affection_level,
  childFriendly: breedObj.child_friendly,
  grooming: breedObj.grooming,
  intelligence: breedObj.intelligence,
  healthIssues: breedObj.health_issues,
  socialNeeds: breedObj.social_needs,
  strangerFriendly: breedObj.stranger_friendly
})

module.exports = router;