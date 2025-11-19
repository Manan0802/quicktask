import express from "express";
import { registerUser,loginUser } from "../controllers/authController.js";

const router= express.Router()

router.post('/register',registerUser) //post request made hogi to /register

router.post('/login',loginUser) //post request made hogi to login the  user 

export default router
