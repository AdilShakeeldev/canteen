const User = require('../models/User');

exports.addFavoriteOrder = async (req, res) => {
  const { orderId } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user.favoriteOrders.includes(orderId)) {
      user.favoriteOrders.push(orderId);
      await user.save();
    }
    res.status(200).json({ message: 'Order added to favorites' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removeFavoriteOrder = async (req, res) => {
  const { orderId } = req.body;
  try {
    const user = await User.findById(req.user.id);
    user.favoriteOrders = user.favoriteOrders.filter(id => id.toString() !== orderId);
    await user.save();
    res.status(200).json({ message: 'Order removed from favorites' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFavoriteOrders = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('favoriteOrders');
    res.status(200).json(user.favoriteOrders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};