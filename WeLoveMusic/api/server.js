import express from 'express'
import config from './app.js';
import UsuarioRoutes from './routes/usuario.js';
import db from '../api/bd/db.js'
import rutas from './routes/index.js';


const app = express()
//Settear el puerto
app.set('port', config.port);

app.use("/api", rutas);


// const apiPaths={
//     usuarios:'/api/usuarios',
// }
// routes() {
//     app.use(apiPaths.usuarios, UsuarioRoutes)
// }


export default app