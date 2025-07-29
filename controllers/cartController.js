// controllers/cartController.js
const Cart = require('../models/Cart');
const Product = require('../models/Product');

// POST /cart - Add product to cart
exports.addToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const existingProduct = await Product.findById(productId);

    if (!existingProduct) return res.status(404).json({ message: 'Product not found' });

    const cartItem = new Cart({
      product: productId,
      quantity,
      userId: req.user.id  // from auth middleware
    });

    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (err) {
    next(err);
  }
};

// PUT /cart/:id - Update quantity
exports.updateCartItem = async (req, res, next) => {
  try {
    const { quantity } = req.body;

    const cartItem = await Cart.findOne({ _id: req.params.id, userId: req.user.id });
    if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });

    cartItem.quantity = quantity;
    await cartItem.save();
    res.json(cartItem);
  } catch (err) {
    next(err);
  }
};

// DELETE /cart/:id - Remove from cart
exports.deleteCartItem = async (req, res, next) => {
  try {
    const cartItem = await Cart.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });

    res.json({ message: 'Item removed from cart' });
  } catch (err) {
    next(err);
  }
};
