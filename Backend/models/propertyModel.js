const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    rooms: { type: Number, required: true },
    area: { type: String, required: true },

    // createdBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Owner",
    //     required: true,
    // },

    // roomsOfProperty : [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Room",
    //     },
    // ],
}, {timestamps: true});

module.exports = mongoose.model('Property', propertySchema);
