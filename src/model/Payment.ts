import mongoose from 'mongoose';

const PaymentModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    products: {
        type: Array,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Payment = mongoose.model('Payment', PaymentModel);

export { Payment }