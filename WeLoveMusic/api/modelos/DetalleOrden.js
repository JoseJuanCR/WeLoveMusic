import { DataTypes as Dt, Model } from "sequelize";
import db from "../bd/db.js"

class DetalleOrden extends Model {}

DetalleOrden.init({
    confCompra:{
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
    total:{
        type: Dt.DECIMAL(10, 2),
        allowNull: false,
        validate:{
            isDecimal: true         
        }
    },
}, {
    sequelize: db,
    modelName: "DetalleOrden"
    })

export default DetalleOrden;