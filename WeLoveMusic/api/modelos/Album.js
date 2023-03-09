import { DataTypes as Dt, Model } from "sequelize";
import db from "../bd/db.js"

class Album extends Model {}

Album.init({
    NombreAlbum: {
        type: Dt.STRING(10),
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 50],
        }
    },
    Descripcion: {
        type: Dt.STRING,
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
        }
    },
    FormatoDisponible: {
        type: Dt.STRING(20),
        allowNull: false,
        validate: {
            is: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+$/u,
            len: [2, 10],
        }
    },
    Precio: {
        type: Dt.DECIMAL(10, 2),
        allowNull: false,
        validate:{
            isDecimal: true         
        }
    },
    stock: {
        type: Dt.INTEGER(10),
        allowNull: false,
        validate:{
            isNumeric:true
        }
    },
    // image:{
    //     type:Dt.STRING
    // },
    
},   {
    sequelize: db,
    modelName: "Album"
    }
) 
export default Album;