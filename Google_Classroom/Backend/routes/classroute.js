import express from 'express'
const router = express.Router()
import { createClass, getClasss, getClassid, updateClass, deleteClass } from "../controller/classController.js"

router.post('/', createClass)
router.get('/', getClasss)
router.get('/:id', getClassid)
router.patch('/:id', updateClass)
router.delete('/:id', deleteClass)

// router.post('/signup', teacherSignup)
// router.post('/login', teacherLogin)

export default router