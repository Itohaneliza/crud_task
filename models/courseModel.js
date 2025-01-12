const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema(
    {
  courseName: {
     type: String, 
     required: true 
    },
  courseCode: { 
    type: String, 
    required: true, 
    unique: true 
},
  instructor: { 
    type: String, 
    required: true 
},
  creditHours: { 
    type: Number, 
    required: true 
}
},
{
  timestamps: true
}
);

const course = mongoose.model('Course', CourseSchema);
module.exports = course;
