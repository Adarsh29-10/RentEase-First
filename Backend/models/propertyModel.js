const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    propertyName: { type: String, required: true },
    address: { type: String, required: true },
    totalRooms: { type: Number, required: true },
    totalArea: { type: String, required: true }
});

module.exports = mongoose.model('Property', propertySchema);
