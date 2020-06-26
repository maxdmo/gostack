/**
 * Para criar: name, email, senha
 */
interface TechObject {
    title: string,
    expience: number;
}

interface CreateUserData {
    name?: string,
    email: string,
    password: string;
    techs: Array<string> | TechObject
}

export default function createUser({ name = '', email, password }: CreateUserData) {
    const user = {
        name,
        email,
        password
    }

    return user;
}