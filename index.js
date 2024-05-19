import express from 'express'
import pg from 'pg'
import { config } from 'dotenv'

config()

const app = express()
const pool = new pg.Pool({
    connectionString: process.env.DB_HOST,
    ssl: true
})
app.get('/', (req, res) => {
    res.send('Node con PostgresSQL')
})

app.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})

app.listen(8000)