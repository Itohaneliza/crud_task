const express = require('express');
const Course = require('../models/courseModel.js');
const router = express.Router();
const { createCourse, getAllCourses, updateCourse, deleteCourse, getCourseWithCreditHoursGreaterThanTen } = require('../controllers/courseController.js');

router.get('/course', getAllCourses);
router.post('/course', createCourse);
router.put('/course/:id', updateCourse);
router.delete('/course/:id', deleteCourse);
router.get('/course/creditHours/greater-than-10', getCourseWithCreditHoursGreaterThanTen);

module.exports = router;    
