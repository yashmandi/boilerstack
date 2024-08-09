// backend/index.js

const express = require('express');
const bodyParser = require('body-parser');
const razorpayRoutes = require('./routes/razorpayRoutes');
const verifyPayment = require('./routes/verifyPayment');

const app = express();

// Middleware
app.use(bodyParser.json());

// Razorpay Routes
app.use('/api/razorpay', razorpayRoutes);

// Payment Verification Route
app.use('/api/razorpay', verifyPayment);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));