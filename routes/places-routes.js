const express = require('express');
const placesController = require('../controller/places-controller');
const HttpError = require('../model/http-error');

const router = express.Router();


router.get('/:pid', placesController.getPlaceById);

router.get('user/:uid', placesController.getPlacesByUserId);

router.post('/', placesController.createPlace);

router.patch('/:pid', placesController.updatePlace);

router.delete('/:pid', placesController.deletePlace);

module.exports = router;