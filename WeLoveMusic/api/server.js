import express from 'express'
import config from './app.js';
import db from '../api/bd/db.js'

const app = express()
//Settear el puerto
app.set('port', config.port)



export default app