const express = require('express');
const crypto = require('crypto');
const router = express.Router();

router.post('/verify', (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const hmac = crypto.createHmac('sha256', 'YOUR_SECRET_KEY');
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generated_signature = hmac.digest('hex');

    if (generated_signature === razorpay_signature) {
        res.status(200).json({ message: 'Payment verified successfully' });
    } else {
        res.status(400).json({ message: 'Payment verification failed' });
    }
});

module.exports = router;