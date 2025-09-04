const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  category: [String],
  duration: Number,
  cover_image_url: String,
  students_involved: Number,
  description: String,
  essence_of_assessment: [String],
  video: {
    video_url: String,
    current_time_seconds: Number,
    total_time_seconds: Number
  },
  participants: [{
    user_id: mongoose.Schema.Types.ObjectId,
    name: String,
    avatar_url: String
  }],
  tasks: [{
    student: {
      user_id: mongoose.Schema.Types.ObjectId,
      name: String,
      class: String,
      student_number: String
    },
    file_task: {
      last_modified: Date,
      file_submissions: [{
        file_id: mongoose.Schema.Types.ObjectId,
        file_url: String
      }]
    }
  }],
  progress: Number
});

module.exports = mongoose.model('Course', courseSchema);
