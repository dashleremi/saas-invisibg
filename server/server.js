import 'dotenv/config'
import express from 'express'
import cors from 'cors'

// app configuration
const PORT = process.env.PORT || 4000
const app = express()

// initialize middlewares
app.use(express.json())
app.use(cors())

// API routes
app.get('/', (req, res) => res.send("API working"))

app.listen(PORT, ()=> console.log("Server running on port " + PORT))