const Owner = require('../models/ownerModel');
const jwt = require('jsonwebtoken');

exports.loginOwner= async (req, res)=>{
    try {
        const {ownerEmail, ownerPassword} = req.body;

        const owner = await Owner.findOne({ownerEmail});
        if(!owner){
            return res.status(401).json({ message: "Invalid email or password" });
        }

        if(ownerPassword !== owner.ownerPassword ){
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign(
            { ownerId: owner._id },
            'aalubade', // Replace with a strong secret in production
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            owner: {
              _id: owner._id,
              ownerName: owner.ownerName,
              ownerEmail: owner.ownerEmail
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Login failed", error: error.message });
    }
}