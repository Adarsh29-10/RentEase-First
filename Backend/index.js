const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const authRoutes = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const roomRoutes = require('./routes/roomRoutes')
const ownerRoutes = require('./routes/ownerRoutes')

const Property = require('./models/propertyModel.js')
const authRoutes = require('./routes/authRoutes');

const app = express();
 
const {v4 : uuidv4} = require('uuid');

app.use(cors());
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', // Must be explicit (no wildcard '*')
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Required when using withCredentials
  }));

mongoose.connect('mongodb://127.0.0.1:27017/RentEase', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));


// Debugging: Verify route imports are functions
console.log('propertyRoutes type:', typeof propertyRoutes); // Should be 'function'
console.log('roomRoutes type:', typeof roomRoutes);
console.log('ownerRoutes type:', typeof ownerRoutes);



app.use('/api', propertyRoutes);
app.use('/api', roomRoutes);
app.use('/api', ownerRoutes);
app.use('/api', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.listen(8080, () => console.log(`Server running at http://localhost:8080`));

