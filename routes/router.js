
import { Router } from 'express'

const authRouter = Router();


authRouter.post("/register", (req, res) => {
    res.send("Registro ejecutado")
})

authRouter.post("/login", (req, res) => {
    res.send("login ejecutado")
})

authRouter.post("/verify-email", (req, res) => {
    res.send("verify-email ejecutado")
})


export default authRouter