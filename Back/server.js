const express = require('express')
const mysql = require('mysql')
const cors = require('cors') 
const app = express()
const expressPort = 3001
app.use(cors())
app.use(express.json())

const dataBase = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'sneakers'
})

dataBase.connect((err) => {
    if (err) {
        console.log("Erreur de connexion:", err)
        return
    }
    console.log("bsahtek bg t'es plug à la db")
})

app.get('/items', (req,res) => {
    const sql = 'SELECT * FROM voitures;'
    dataBase.query(sql, (err, results) => {
        if (err) {
            console.log("Erreur SQL :", err); 
            return res.status(500).json({ 
                error: 'Erreur du serveur',
                details: err.message
            })
        }
        return res.status(200).json(results)
    })
})
