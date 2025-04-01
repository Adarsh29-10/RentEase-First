const Property = require('../models/propertyModel');
const Owner = require('../models/ownerModel'); 

exports.newProperty = async (req, res) => {
    try {
        const { name, address, rooms, area } = req.body;
        

        const newProperty = await Property.create({
            name,
            address,
            rooms,
            area,
        });

        res.status(201).json({
            message: 'Property added successfully',
            property: newProperty
        });

    } catch (error) {
        console.error("Error adding property", error);
        res.status(500).json({ 
            message: 'Failed to add property', 
            error: error.message 
        });
    }
};


// exports.showProperties = async (req, res)=>{
//     //api for printing property data

//     try{
//         const properties = await Property.find();
//         res.status(201).json({message: 'Properties data fetched succesfuly', properties})
//     } catch(error){
//         console.error(error);
//         res.status(201).json({message: 'Unable to fetch Properties data ', error})
//     }
// };

exports.showProperties = async (req, res) => {
    try {
      const properties = await Property.find()
        // .populate('createdBy', 'ownerName ownerEmail') // Only include owner name/email
        // .populate('rooms'); // Include all room details
  
      res.status(200).json({ 
        message: 'Properties fetched with owner and room data', 
        properties 
      });
  
    } catch(error) {
      console.error(error);
      res.status(500).json({ 
        message: 'Failed to fetch properties', 
        error: error.message 
      });
    }
  };


// exports.propertiesById = async (req, res)=>{
    
//     try{
//         const {id} = req.params;
//         const properties = await Property.findById(id);
//         res.status(201).json({message: 'Properties data fetched succesfuly by id', properties})
//     } catch(error){
//         console.error(error);
//         res.status(201).json({message: 'Unable to fetch Properties data ', error})
//     }
    
// };

exports.propertiesById = async (req, res) => {
    try {
      const { id } = req.params;
      
      const property = await Property.findById(id)
        .populate('createdBy')
        .populate({
          path: 'rooms',
          populate: { path: 'tenant' } // If rooms have tenants
        });
  
      if (!property) {
        return res.status(404).json({ 
          message: 'Property not found' 
        });
      }
  
      res.status(200).json({ 
        message: 'Property data fetched successfully', 
        property 
      });
  
    } catch(error) {
      console.error(error);
      res.status(500).json({ 
        message: 'Failed to fetch property', 
        error: error.message 
      });
    }
  };