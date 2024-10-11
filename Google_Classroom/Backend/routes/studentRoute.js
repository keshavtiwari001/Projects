import express from 'express'
const router = express.Router()
import { createStudent, getStudents, getStudentid, updateUser, deleteUser } from "../controller/studentController.js"
import userAuth from '../middlewares/userAuth.js'

router.post('/', userAuth, createStudent)
router.get('/', userAuth, getStudents)
router.get('/:id', userAuth, getStudentid)
router.patch('/:id', userAuth, updateUser)
router.delete('/:id', userAuth, deleteUser)

// router.post('/signup', studentSignup)
// router.post('/login', studentLogin)

export default router