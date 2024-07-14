import express from 'express'
import { signup } from '../controller/user.controller.js'

const router = express.Router()


//we can use one of two , 
// router.route('/signup').post(signup)
router.post('/signup', signup)         



export default router