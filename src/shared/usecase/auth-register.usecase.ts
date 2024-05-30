import AsyncStorage from '@react-native-async-storage/async-storage';

import HttpRequestPort from '@/src/infra/http-request/http-request-port';

async function execute(name: string, email: string, password: string) {
    if (!name || !email || !password) return;

    try {
        const response: { token: string } = await HttpRequestPort.post({
            path: '/register',
            body: {
                name,
                email,
                password
            }
        });

        if (!response) throw new Error();

        await AsyncStorage.setItem('userToken', response?.token.toString());

        return true;
    } catch (error) {
        console.warn({ error });
        return false;
    }
}

async function getIsUserLogged() {
    const userToken = await AsyncStorage.getItem('userToken');

    if (userToken && userToken?.length > 0) {
        return true;
    }

    return false;
}

const AuthRegisterUsecase = {
    execute,
    getIsUserLogged
};

export default AuthRegisterUsecase;
