import express from 'express'
const router = express.Router()
import { createClass, getClasss, getClassid, updateClass, deleteClass } from "../controller/classController.js"
import userAuth from '../middlewares/userAuth.js'

router.post('/', userAuth, createClass)
router.get('/', userAuth, getClasss)
router.get('/:id', userAuth, getClassid)
router.patch('/:id', userAuth, updateClass)
router.delete('/:id', userAuth, deleteClass)

// router.post('/signup', teacherSignup)
// router.post('/login', teacherLogin)

export default router;