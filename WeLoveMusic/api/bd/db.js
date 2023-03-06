import { Sequelize } from "sequelize";

const db = new Sequelize('welovemusic','root','',  {
    host: 3306,
    dialect: "mysql",
    
});

try {
    await db.authenticate();
    console.log('Se ha conectado a la base de datos correctamente.');
  } catch (error) {
    console.error('Hay un error en la conexion a la base de datos:', error);
  }

export default db