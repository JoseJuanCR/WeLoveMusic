import { DataTypes as Dt, Model } from "sequelize";
import db from "../bd/db.js"

class Rol extends Model {}

Rol.init({
    idAdmin:{
        type: Dt.STRING(10),
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 10],
        }
    },
    isAdmin: {
        type: Dt.BOOLEAN,
    },
},{
    sequelize: db,
    modelName: "DetalleOrden"
    }
)
export default Rol;