const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  avatar_url: String,
  role: String, 
  bio: String,
  task_count: Number,
  rating: Number,
  review_count: Number,
  followed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Mentor', mentorSchema);
