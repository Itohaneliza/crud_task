const express = require('express');
const Student = require('../models/studentModel.js');
const router = express.Router();
const { createStudent, getAllStudents, updateStudent, deleteStudent, enrollStudentInCourse } = require('../controllers/studentController.js');

router.get('/student', getAllStudents);
router.post('/student', createStudent);
router.put('/student/:id', updateStudent);
router.delete('/student/:id', deleteStudent);  
router.post('/student/:studentId/enroll/:courseId', enrollStudentInCourse);

module.exports = router;