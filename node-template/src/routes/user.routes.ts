import { UseController } from './../resources/user/dtos/user.controllers';
import { Router } from 'express';

const UseRouter = Router();
const useController = new UseController();

UseRouter.post('/signin', useController.signin);
UseRouter.post('/signup', useController.signup);

// UseRouter.post('/signin', (request, response) => {
//     return response.send('Entrado com usuario')
// });

// UseRouter.post('/signup', (request, response) => {
//     return response.send('Criando um usuario')
// });

// GET
// POST
// PUT
// PATH
// DELETE

export default UseRouter;