const express = require('express');
const router = express.Router();
const {
  registerStudent,
  getAllStudents,
  getStudentById,
  deleteStudent
} = require('../controllers/studentController');

router.post('/register', registerStudent);
router.get('/students', getAllStudents);
router.get('/students/:id', getStudentById);
router.delete('/students/:id', deleteStudent);

module.exports = router;
