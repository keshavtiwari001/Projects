import express from 'express'
const router = express.Router()
import { createTeacher, getTeachers, getTeacherid, updateUser, deleteUser } from "../controller/teacherController.js"
import userAuth from '../middlewares/userAuth.js'


router.post('/', userAuth, createTeacher)
router.get('/', userAuth, getTeachers)
router.get('/:id', userAuth, getTeacherid)
router.patch('/:id', userAuth, updateUser)
router.delete('/:id', userAuth, deleteUser)

// router.post('/signup', teacherSignup)
// router.post('/login', teacherLogin)

export default router