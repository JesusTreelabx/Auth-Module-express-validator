
import express from 'express'
import 'dotenv/config'
import authRouter from './routes/router.js'
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use("/auth", authRouter)


app.get('/', (req, res) => {
    res.send('Welcome to the Express-Validator Demo!')
})




app.listen(PORT, () => {
    console.log(`Server running on localhost ${PORT}`)
});


// Para ejecutar el servidor este comando: npm run dev