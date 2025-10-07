
import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import fs from 'fs/promises'
import bcrypt from 'bcryptjs'

const authRouter = Router()
const dataPath = "./data/users.json"
const saltRounds = 10 // Nivel de seguridad para el hasheo

// Register 
authRouter.post(
    "/register",
    [
        body('email').isEmail().withMessage('El formato del email es invalido.'),
        body('password').isLength({ min: 8 }).withMessage('La contraseña debe contener al menos 8 caracteres.'),
        body('email').normalizeEmail(),
    ],
    (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array({ onlyFirstError: true })
            })
        }

        res.send("Registro validado!")
    }
)


// Login 
authRouter.post("/login", (req, res) => {
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