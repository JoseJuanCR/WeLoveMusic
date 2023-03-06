import { DataTypes as Dt, Model } from "sequalize";
import db from "../bd/db.js"

class Formato extends Model {}

Formato.init({
    idFormato:{
        type: Dt.STRING(20),
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 20],
        }
    },
    nombreFormato:{
        type: Dt.STRING(30),
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 30],
        }
    },
},{
    sequelize: db,
    modelName: "DetalleOrden"
    })

export default Formato;