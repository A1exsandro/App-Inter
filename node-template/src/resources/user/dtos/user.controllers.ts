import { Request, Response } from 'express';
import UseService from './user.service';

export class UseController {
    async signin (req:Request, res:Response){
        const {email, password} = req.body;
        const userService = new UseService();

        const user = await userService.signin({email, password});

        return res.status(200).send(user);
    }
    async signup (req:Request, res:Response){
        return res.send('Criando um usuário')
    }
}