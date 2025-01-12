const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema(
    {
  name: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
  age: { 
    type: Number, 
    required: true 
  },
  enrolledCourses: [{ 
    type: mongoose.Schema.Types.ObjectId, ref: 'Course' }] // Array of course IDs
},
{
  timestamps: true
}
);

const student = mongoose.model('Student', StudentSchema);

module.exports = student;
