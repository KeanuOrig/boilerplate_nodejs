import User from "../models/user.js";

export default class UserService {

    static async getAllUsers(req) {
        const paranoid = req.query.paranoid == "false" ? false : true;

        return await User.findAll({
            paranoid: paranoid
          })
    }

    static async getById(req) {
        return await User.findOne({ 
                where: { 
                    id: req.params.id
                }
            });
    }

    static async create(req) {
        console.log(req.body.email)
        return await User.create({ 
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                role: req.body.role
            });
    }

    static async update(req) {
        return await User.update(
            { 
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.last_name,
                role: req.body.role
            }, 
            {
                where: { id: req.params.id }
            }
        );
    }
    
    static async delete(req) {
        return await User.destroy({
                where: { id: req.params.id }
            });
    }

    static async restore(req) {

        const user = await User.findByPk(req.params.id, { paranoid: false });
        
        await User.restore({ 
                where: { id: req.params.id } 
            })
        return user
    }

}
