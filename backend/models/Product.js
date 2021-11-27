const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  // _id: {
  //   type: String,
  //   require: true,
  // },
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
})

const Product = mongoose.model("product", productSchema);
module.exports = Product;
