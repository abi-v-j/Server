import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json({ extended: false }))

app.get('/Sample', (req, res) => {
res.send({
    msg:'Hello Abi'
})
})
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))