const express = require('express');
const router = express.Router();
const {
  addToCart,
  updateCartItem,
  deleteCartItem
} = require('../controllers/cartController');

const auth = require('../middleware/authMiddleware');

router.post('/', auth, addToCart);
router.put('/:id', auth, updateCartItem);
router.delete('/:id', auth, deleteCartItem);

module.exports = router;
