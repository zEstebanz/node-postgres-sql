import express from 'express'

const app = express()

app.get('/', (req, res) =>{
    res.send('Node con PostgresSQL')
})

app.listen(8000)