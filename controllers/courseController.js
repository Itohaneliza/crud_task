const Course = require('../models/courseModel');

// Create a new Course
const createCourse = async (req, res) => {
        try {
          const course = await Course.create(req.body);
          res.status(200).json(course);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };

// Get all Courses  
const getAllCourses = async (req, res) => {
        try {
          const courses = await Course.find({});
          res.status(200).json(courses);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      };


// Update a Course
const updateCourse = async (req, res) => {
        try {
            const {id} = req.params;
          const course = await Course.findByIdAndUpdate(id, req.body);

          if(!course){
              res.status(404).json({ message: 'Course not found' });
          }
          const updatedCourse = await Course.findOne(id);
            res.status(200).json(course);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
}

// Delete a Course
const deleteCourse = async (req, res) => {
        try {
            const {id} = req.params;
          const course = await Course.findByIdAndDelete(id);

          if(!course){
              res.status(404).json({ message: 'Course not found' });
          }
            res.status(200).json({ message: 'Course deleted successfully' });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
}

// List courses with credit hours greater than 10
const getCourseWithCreditHoursGreaterThanTen = async (req, res) => {
        try {
          const courses = await Course.find({ creditHours: { $gt: 10 } });
          res.status(200).json(courses);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
}

module.exports = {
    createCourse,
    getAllCourses,
    updateCourse,
    deleteCourse,
    getCourseWithCreditHoursGreaterThanTen
}