import express from 'express'
const router = express.Router()
import { createTeacher, getTeachers, getTeacherid, updateUser, deleteUser, teacherSignup, teacherLogin } from "../controller/teacherController.js"

router.post('/', createTeacher)
router.get('/', getTeachers)
router.get('/:id', getTeacherid)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

router.post('/signup', teacherSignup)
router.post('/login', teacherLogin)

export default router