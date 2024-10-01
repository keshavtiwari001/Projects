import express from 'express'
const router = express.Router()
import { createStudent, getStudents, getStudentid, updateUser, deleteUser } from "../controller/studentController.js"

router.post('/', createStudent)
router.get('/', getStudents)
router.get('/:id', getStudentid)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

// router.post('/signup', studentSignup)
// router.post('/login', studentLogin)

export default router