
import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import fs from 'fs/promises'
import bcrypt from 'bcryptjs'

const authRouter = Router()
const dataPath = "./"
const saltRounds = 10 // Nivel de seguridad para el hasheo


// Register 
authRouter.post("/register", [
    // Validate name
    body("name")
        .notEmpty().withMessage("Name is required")
        .trim()
        .isLength({ min: 2, max: 50 }).withMessage("Name must be between 2 and 50 characters"),

    // Validate email
    body("email")
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Invalid email format")
        .normalizeEmail(),

    // Validate password
    body("password")
        .notEmpty().withMessage("Password is required")
        .isLength({ min: 8 }).withMessage("Password must be at least 8 characters long")
        .matches(/[A-Z]/).withMessage("Password must contain at least one uppercase letter")
        .matches(/[0-9]/).withMessage("Password must contain at least one number")
], (req, res) => {
    // Check for validation errors
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    // Process valid data
    const { name, email, password } = req.body
    res.status(201).json({
        message: "User registred succesfully",
        user: { name, email }
    })
})



// Login 
authRouter.post("/login", [
    // validate email
    body('email')
    .isEmail().withMessage("Please enter a alid email")
    .custom(value => {
        return User.findOne({email: value}).then(foundUser => {
            if (!foundUser){\
                
            }
        })
    })
]
    
    
    (req, res) => {
    
    res.send("login ejecutado")
})


// Verify-email
authRouter.post("verify-email", (req, res) => {
    res.send("verify-email ejecutado")
})


// Save-data
authRouter.post("/save-data", (req, res) => {
    res.send("save-data ejecutado")
})


// Forgot-password
authRouter.post("/forgot-password", (req, res) => {
    res.send("forgot-password ejecutado")
})


// Reset-password
authRouter.post("/reset-password", (req, res) => {
    res.send("reset-password ejecutado")
})

export default authRouter