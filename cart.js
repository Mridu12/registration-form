const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Product = mongoose.model('Product', {
  name: String,
  price: Number,
});

const Cart = mongoose.model('Cart', {
  productId: String,
  quantity: Number,
});

app.post('/api/add-to-cart', async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const cartItem = await Cart.findOne({ productId });
    if (cartItem) {
      // If the product is already in the cart, update the quantity
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      // If the product is not in the cart, create a new cart item
      await Cart.create({ productId, quantity });
    }

    res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
