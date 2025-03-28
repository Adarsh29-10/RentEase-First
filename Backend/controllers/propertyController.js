const Property = require('../models/propertyModel');

const {v4 : uuidv4} = require('uuid');



    
exports.newProperty = async (req, res)=>{
    //api for new property
    try{
        const {name, address, rooms ,area} = req.body;

        //create a new property document
        const newProperty = new Property({
            id: uuidv4(),
            name,
            address,
            rooms,
            area
        })

        await newProperty.save();
        res.status(201).json({message: 'Property added successfully', property: newProperty});
    } catch(error){
        console.error("Error adding property", error);
        res.status(500).json({ message: 'Failed to add property', error: error.message });
    }


};


exports.showProperties = async (req, res)=>{
    //api for printing property data

    try{
        const properties = await Property.find();
        res.status(201).json({message: 'Properties data fetched succesfuly', properties})
    } catch(error){
        console.error(error);
        res.status(201).json({message: 'Unable to fetch Properties data ', error})
    }
};




exports.propertiesById = async (req, res)=>{
    
    try{
        const {id} = req.params;
        const properties = await Property.findById(id);
        res.status(201).json({message: 'Properties data fetched succesfuly by id', properties})
    } catch(error){
        console.error(error);
        res.status(201).json({message: 'Unable to fetch Properties data ', error})
    }
    
};

