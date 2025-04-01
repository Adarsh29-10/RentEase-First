const mongoose = require("mongoose");

const tenantSchema = new mongoose.Schema({
    tenantName : { type: String, required: true },
    tenantNumber: { type: String, required: true },
    tenantEmail : { type: String, required: true, unique: true },
    tenantAadhaar: { type: String, required: true },
    tenantOccupation: { type: String, required: true },
    tenantPassword: { type: String, required: true },
}, {timestamps: true});

module.exports = mongoose.model('Tenant', tenantSchema);