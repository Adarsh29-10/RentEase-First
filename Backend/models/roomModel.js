const mongoose = require('mongoose');
const { v4: uuidv4} = require('uuid');

const roomSchema = new mongoose.Schema({
    _id : { type: String, default: () => uuidv4() },
    roomName : { type: String, required: true},
    roomNumber : { type: String, required: true},
    roomTStatus : { type: String, required: true},  //room tenant status
    roomSize : { type: String, required: true},
    roomPrice : { type: String, required: true},
});

module.exports = mongoose.model('Room', roomSchema);