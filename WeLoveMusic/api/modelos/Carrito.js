import { DataTypes as Dt, Model } from "sequelize";
import db from "../bd/db.js"

class Carrito extends Model {}

Carrito.init({
    carritoCliente:{
        type: Dt.STRING(10),
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 10],
        }
    },
    albumId:{
        type: Dt.STRING(10),
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 10],
        }
    },
    cantidadAlbum: {
        type: Dt.INTEGER(10),
        allowNull: false,
        validate:{
            isDecimal: false         
        }
    },
    subtotal: {
        type: Dt.DECIMAL(10, 2),
        allowNull: false,
        validate:{
            isDecimal: true         
        }
    },
    confCompra:{
        type: Dt.STRING(10),
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 10],
        }
    },
},   {
    sequelize: db,
    modelName: "Carrito"
    }
)
export default Carrito;