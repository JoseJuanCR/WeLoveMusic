import { Usuario } from "../modelos/index.js";

class UsuarioController {
    static async createUsuario(req, res) {
        try {
            const { Nombre, ApellidoP, ApellidoM, Telefono, Mail, User, Pass, tipoUsuario } = req.body
            const results = await User.create({ Nombre, ApellidoP, ApellidoM, Telefono, Mail, User, Pass, tipoUsuario })
            // await registerMail(name, email)
            res.status(200).send({ succes: true, message: "Usuario creado con exito" })
        } catch (error) {
            res.status(400).send({ success: false, message: error })
        }
    }
}