const Feedback = require('../models/Feedback');

exports.submitFeedback = async (req, res) => {
  const { message } = req.body;
  try {
    const feedback = new Feedback({ userId: req.user.id, message });
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find().populate('userId', 'name email');
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};