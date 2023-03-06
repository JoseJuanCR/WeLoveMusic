import { DataTypes as Dt, Model } from "sequalize";
import db from "../bd/db.js"

class FormaDePago extends Model {}

FormaDePago.init({
    idCliente:{
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
    nombre:{
        type: Dt.STRING(10),
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 10],
        }
    },

},{
    sequelize: db,
    modelName: "FormaDePago"
})

export default FormaDePago;