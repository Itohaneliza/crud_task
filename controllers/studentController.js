const Student = require('../models/studentModel');

const createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find({});
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
}

const updateStudent = async (req, res) => {
    try {
        const {id} = req.params;
        const student = await Student.findByIdAndUpdate(id, req.body);

        if (!student) {
             return res.status(404).json({ message: 'Student not found' });
        }
        const updatedStudent = await Student.findById(id);
        res.status(200).json(student);
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete a student
const deleteStudent = async (req, res) => { 
    try{
        const {id} = req.params;
        const student = await Student.findByIdAndDelete(id);

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Enroll a student in a course
const enrollStudentInCourse = async (req, res) => {
    try {
        const {studentId, courseId} = req.params;
        const student = await Student.findById(req.params.id);
    const course = await Course.findById(req.params.courseId);
    if (!student || !course) {
      return res.status(404).json({ error: 'Student or course not found' });
    }
    student.enrolledCourses.push(course._id);
    await student.save();
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// list all students enrolled in a course
const getStudentsEnrolledInCourse = async (req, res) => {
    try {
    const students = await Student.find({ enrolledCourses: req.params.courseId }).populate('enrolledCourses');
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { createStudent, getAllStudents, updateStudent, deleteStudent, enrollStudentInCourse, getStudentsEnrolledInCourse };
