import { DataTypes as Dt, Model } from "sequalize";
import db from "../bd/db.js"

class Usuario extends Model {}

Usuario.init({
    Nombre: {
        type: Dt.STRING(50),
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 10],
        }
    },
    ApellidoP: {
        type: Dt.STRING(50),
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 10],
        }
    },
    ApellidoM: {
        type: Dt.STRING(50),
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 10],
        }
    },
    Telefono: {
        type: Dt.INTEGER(10),
        allowNull: false,

    },
    Mail: {
        type: Dt.STRING(50),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    User: {
        type: Dt.STRING(50),
        allowNull: false,

    },
    Pass: {
        type: Dt.STRING(50),
        allowNull: false,
        validate: {
            len: [8, 16],
        }
    },
    tipoUsuario: {
        type: Dt.STRING(50),
        allowNull: false,

    },
     Estado: {
        type: Dt.BOOLEAN,
    },

}, {
    sequelize: db,
    modelName: "Usuario"
})

export default Usuario;