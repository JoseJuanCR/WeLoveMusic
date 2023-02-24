import express from 'express'
import config from './config';


const app = express()
let port = 6000;
//Settear el puerto
app.set('port', config.port)

export default app