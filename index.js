const express = require('express')
const app = express();
const mongoose = require('mongoose')
const port = 3002;


///////// User Schema ////////
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    address: String,
    paymentDetails: String,
  });
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;

//////// Product Schema ///////
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    sellerID: mongoose.Types.ObjectId,
    reviews: [{ userId: mongoose.Types.ObjectId, comment: String }],
    ratings: Number,
  });
  
  const Product = mongoose.model('Product', productSchema);
  
  module.exports = Product;


  ///////////// Order Schema ///////////

  const orderSchema = new mongoose.Schema({
    userID: mongoose.Types.ObjectId,
    products: [{ productID: mongoose.Types.ObjectId, quantity: Number }],
    totalAmount: Number,
    status: String,
  });
  
  const Order = mongoose.model('Order', orderSchema);
  
  module.exports = Order;



app.get('/',(req, res)=>{
    res.send('hellow world')
})
app.listen(port, ()=>{
    console.log('server running');
})
