import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email:'max@max.com', 
        password: '1234',
        techs: ['Node.js', 'React', 'React Native']
    });

    console.log(user.name);

    return response.json({ message: 'Hello World' });
}