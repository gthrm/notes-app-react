import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { serverPort } from '../etc/config.json'

import * as db from './utils/dataBaseUtils'

const app = express()

db.setUpConnection()

app.use(bodyParser.json())

app.use(cors({ origin: '*' }));

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data))
})

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data))
})

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data))
})

const sever = app.listen(serverPort, () => {
    console.log(`Server on port ${serverPort}`)
})