
import * as Yup from 'yup'

import User from '../models/User';

import { v4 } from 'uuid';



class UserController {
    async store(request, response) {

        const schema = Yup.object({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
            admin: Yup.boolean(),
        });

        // const validation = await schema.isValid(request.body);

        // if (!isValid) {

        //     return response
        //         .status(400)
        //         .json({ error: 'Make sure the data is correct.' });

        // }


        try {

            schema.validateSync(request.body, { abortEarly: false });
        } catch (err) {
            return response.status(400).json({ error: err.error });
        }




        const { name, email, password, admin, } = request.body;


        const userExists = await User.findOne({

            where: {
                email,
            }
        })

        if (userExists) {
            return response.status(400).json({ error: 'User already exists' })
        }


        const user = await User.create({

            id: v4(),
            name,
            email,
            password,
            admin,



            


            // id: v4(),
            // name: 'Francisca272',
            // email: 'francisca272@gmail.com',
            // password_hash: 'fvrefherere4j34360',
        });

        return response.status(201).json({

            id: user.id,
            name,
            email,
            admin,
        });


    }

}
export default new UserController();