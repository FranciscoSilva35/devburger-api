import { Router } from 'express';
 import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';


const routes = new Router();

routes.post('/users', UserController.store); 
  routes.post('/session', SessionController.store);
// routes.get('/', async (request, response) => {

export default routes;














































































//  const { Router } = require("express")
// import { Router } from "express"

// import { v4 } from "uuid";

// import User from "./app/models/User";


// const routes = new Router()

// routes.get("/", async (request, response) => {
//      return response.status(200).json({ message: "Hello World" })

    

//     const user = await User.create({
//         id: v4(),
//         name: 'Luan25',
//         email: 'luan25@gmail.com',
//         password_hash: 'franci35g2d',

//     });

//     return response.status(201).json(user);

// });





// export default routes
//  module.exports = routes