const express = require('express');
const {newRoom, getRooms, getRoomsById} = require('../controllers/roomController');

const router = express.Router();

router.post('/newRoom', newRoom);

router.get('/getRooms', getRooms); 

router.get('/getRooms/:rid', getRoomsById);

module.exports = router;