const express = require('express');
const { newProperty, showProperties, propertiesById } = require('../controllers/propertyController');
const router = express.Router();


router.post('/add', newProperty);


router.get('/properties', showProperties);


router.get('/properties/:id', propertiesById);


module.exports = router;
