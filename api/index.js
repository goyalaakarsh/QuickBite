const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Sample cart items data
let cartItems = [];

// Get all cart items
app.get('/api/cart', (req, res) => {
    res.json({ cartItems });
});

// Add item to cart
app.post('/api/cart/add', (req, res) => {
    const { item } = req.body;
    const existingItem = cartItems.find(cartItem => cartItem.image === item.image);

    if (existingItem) {
        // If item already exists, update the quantity
        existingItem.quantity = item.quantity;
    } else {
        // If item does not exist, add it to the cart
        cartItems.push({ _id: cartItems.length + 1, ...item });
    }

    res.json({ success: true, message: 'Item added to cart or quantity updated', cartItems });
});

// Update quantity of cart item
app.put('/api/cart/update/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const { quantity } = req.body;

    const itemToUpdate = cartItems.find(item => item._id === itemId);
    if (!itemToUpdate) {
        return res.status(404).json({ success: false, message: 'Item not found' });
    }

    itemToUpdate.quantity = quantity;
    res.json({ success: true, message: 'Item quantity updated', cartItems });
});

app.delete('/api/cart/remove/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    cartItems = cartItems.filter(item => item._id !== itemId);
    res.json({ success: true, message: 'Item removed from cart', cartItems });
});

app.get("/cart", (req, res) => {
    res.send("Working!")
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


