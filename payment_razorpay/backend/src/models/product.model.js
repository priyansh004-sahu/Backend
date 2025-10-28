const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({

   title: { type: String, required: true,},
   imaGEUrl: {type: String, },
   description: {type: String,required: true,},
    price: {
        amount: {type: Number, required: true, },
        currency: {type: String, required: true, default: 'INR', enum: ['INR', 'USD', 'EUR']},
    },
    category: {type: String, default: true,},

}, { timestamps: true });

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;