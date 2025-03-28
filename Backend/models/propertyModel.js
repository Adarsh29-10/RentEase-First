const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    rooms: { type: Number, required: true },
    area: { type: String, required: true }
});

module.exports = mongoose.model('Property', propertySchema);
