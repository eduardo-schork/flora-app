import AsyncStorage from '@react-native-async-storage/async-storage';

import HttpRequestPort from '@/src/infra/http-request/http-request-port';

async function execute(email: string, password: string) {
    if (!email || !password) return;

    try {
        const response: { token: string } = await HttpRequestPort.post({
            path: '/login',
            body: {
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

async function executeAnonym() {
    try {
        const response = await HttpRequestPort.post({
            path: '/anonymSign',
        });

        if (!response) throw new Error();
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

const AuthSigninUsecase = {
    execute,
    executeAnonym,
    getIsUserLogged
};

export default AuthSigninUsecase;
