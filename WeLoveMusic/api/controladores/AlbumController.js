import { Album, Formato } from "../modelos/index.js";

// class AlbumController {
//     static async getAllAlbums(req, res) {
//         try {
//             const results = await Album.findAll({
//                 attributes: ["albumId", "anombreAlbum", "descripcion", "FormatoDisponible", "precio", "stock"],
//                 include: [{ model: Category, attributes: ["name"] }]
//             })
//             if (results.length === 0) throw "No hay productos"
//             res.status(200).send({ succes: true, message: "Productos encontrados", results })
//         } catch (error) {
//             res.status(400).send({ success: false, message: error })
//         }
//     }
// }