const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const authRoutes = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/RentEase', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);

app.listen(8080, () => console.log(`Server running at http://localhost:8080`));
