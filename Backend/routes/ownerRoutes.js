const express = require('express');
const router = express.Router();

const {newOwner} = require('../controllers/ownerController');


router.post('/newOwner', newOwner);


module.exports = router;