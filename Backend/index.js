const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const authRoutes = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const roomRoutes = require('./routes/roomRoutes')


const Property = require('./models/propertyModel.js')
const app = express();
 
const {v4 : uuidv4} = require('uuid');

app.use(cors());
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:8080',  // Allow only your React frontend
    methods: ['GET', 'POST']
}));


mongoose.connect('mongodb://127.0.0.1:27017/RentEase', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api', propertyRoutes);
app.use('/api', roomRoutes);


app.listen(8080, () => console.log(`Server running at http://localhost:8080`));






// app.use('/api/auth', authRoutes);
// app.use('/api/properties', propertyRoutes);

// app.post('api/properties/add',  async (req, res) => {
//     try {
//         const { name, address, rooms, area } = req.body;

//         const newProperty = new Property({
//             id: uuidv4(),
//             name,
//             address,
//             rooms,
//             area
//         });

//         await newProperty.save();
//         res.status(201).json({ message: 'Property added successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to add property', error: error.message });
//     }
// });

// app.get('api/get', async (req, res) => {
//     try{
//         const properties = await Property.find();
//         res.status(200).json(properties);  
        
//     } catch(err){
//         res.status(500).json({message: "Failed to fetch properties", error: err.message});
//     }

    
// });

