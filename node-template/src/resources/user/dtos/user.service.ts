import { getRepository } from 'typeorm';
import md5 from 'crypto-js/md5'
import { sign } from 'jsonwebtoken';

import { User } from '../../../entity/User';
import authConfig from '../../../config/auth';

import { UserSignup } from './user.signup.dtos';
import { UserSignin } from './user.signin.dtos';
import AppError from '../../../shared/error/AppError';


export default class UseService {

    async signin(user: UserSignin){
        const useRepository = getRepository(User);

        const { email, password } = user;
        const passwordHash = md5(password).toString();

        const existUser = await useRepository.findOne({where: { email, password: passwordHash }})

        if(!existUser){
            throw new AppError('Usuário não encontrado', 401);
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({
            firstName: existUser.firstName,
            lastName: existUser.lastName,
            accountNumber: existUser.accountNumber,
            accountDigit: existUser.accountDigit,
            wallet: existUser.wallet
        }, secret, {
            subject: existUser.id,
            expiresIn,
        });

        //delete existUser.password

        return {  acessToken: token }
    }

    async signup(user: UserSignup){

    }
}