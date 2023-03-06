import { Usuario } from "../modelos/index.js";

class UsuarioController {
    static async createUsuario(req, res) {
        // try {
        //     const { Nombre, ApellidoP, ApellidoM, Telefono, Mail, User, Pass, tipoUsuario } = req.body
        //     const results = await User.create({ Nombre, ApellidoP, ApellidoM, Telefono, Mail, User, Pass, tipoUsuario })
        //     // await registerMail(name, email)
        //     res.status(200).send({ succes: true, message: "Usuario creado con exito" })
        // } catch (error) {
        //     res.status(400).send({ success: false, message: error })
        // }
    }
    //CREATE
    static  postUsuario(req, res){
        const { body } = req;
        res.json({
            msj: 'postUsuario',
            body
        })
    }
   //READ
    static  getUsuarios(req, res){
        res.json({
            msj: 'getUsuarios'
        })
    }
    static  getUsuario(req, res){
        res.json({
            msj: 'getUsuario',
            id
        })
    }
     //UPDATE
     static  putUsuario(req, res){
        const { id } =req.params
        const { body } = req;
        res.json({
            msj: 'putUsuario',
            body
        })
    } 
    //DELETE
    static  deletetUsuario(req, res){
        const { id } =req.params
        
        res.json({
            msj: 'deleteUsuario',
            id
        })
    } 
}
export default UsuarioController;