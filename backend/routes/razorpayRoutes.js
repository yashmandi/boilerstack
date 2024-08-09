const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();

const instance = new Razorpay({
    key_id: 'YOUR_KEY_ID',
    key_secret: 'YOUR_SECRET_KEY'
});

router.post('/create-order', async (req, res) => {
    const options = {
        amount: req.body.amount * 100, // Amount in paise
        currency: 'INR',
        receipt: `receipt_${Date.now()}`,
    };
    try {
        const order = await instance.orders.create(options);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;