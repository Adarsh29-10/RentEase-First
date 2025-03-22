const Property = require('../models/propertyModel');

// Add New Property
exports.addProperty = async (req, res) => {
    try {
        const { propertyName, address, totalRooms, totalArea } = req.body;

        const newProperty = new Property({
            propertyName,
            address,
            totalRooms,
            totalArea
        });

        await newProperty.save();
        res.status(201).json({ message: 'Property added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add property', error: error.message });
    }
};
