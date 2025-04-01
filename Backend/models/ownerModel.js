const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
    ownerName: { type: String, required: true },
    ownerPhone: { type: String, required: true },
    ownerEmail: { type: String, required: true, unique: true },
    ownerAadhaar: { type: String, required: true },
    ownerAddress: { type: String, required: true },
    ownerPassword: { type: String, required: true },
    properties: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property'
    }]
}, { timestamps: true });

module.exports = mongoose.model('Owner', ownerSchema);