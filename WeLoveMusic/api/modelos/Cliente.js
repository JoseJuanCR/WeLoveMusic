import { DataTypes as Dt, Model } from "sequelize"; 
import db from "../bd/db.js"

class Cliente extends Model {}

Cliente.init({
    idCliente:{
        type: Dt.STRING(10),
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 10],
        }
    },
    carritoCliente:{
        type: Dt.STRING(10),
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 10],
        }
    },
    idPago:{
        type: Dt.STRING(10),
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 10],
        }
    },
},{
    sequelize: db,
    modelName: "Cliente"
    }
)
export default Cliente;