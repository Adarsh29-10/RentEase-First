const Owner  = require('../models/ownerModel');


exports.newOwner = async (req, res)=>{
    try{
        const {ownerName, ownerPhone, ownerEmail, ownerAadhaar, ownerAddress, ownerPassword} = req.body;

        // Check if owner exists
        const existingOwner = await Owner.findOne({ ownerEmail });
        if (existingOwner) {
        return res.status(400).json({ message: "Owner already exists" });
        }

        //create a new owner document
        const newOwner = new Owner({
            ownerName,
            ownerPhone,
            ownerEmail,
            ownerAadhaar,
            ownerAddress,
            ownerPassword
        })

        await newOwner.save();
        res.status(201).json({message:"New Owner added successfuly", owner:{
            _id: newOwner._id,
            email: newOwner.ownerEmail,
        } });

    } catch(error){
        console.error("Error adding new owner", error);
        res.status(500).json({ message: 'Failed to add owner', error: error.message });
    }
};

// exports.showOwner = async (req, res)=>{
//     try{
        

//         await newOwner.save();
//         res.status(201).json({message:"New Owner added successfuly", newOwner });

//     } catch(error){
//         console.error("Error adding new owner", error);
//         res.status(500).json({ message: 'Failed to add owner', error: error.message });
//     }
// };