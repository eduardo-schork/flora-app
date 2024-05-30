import AsyncStorage from '@react-native-async-storage/async-storage';

import HttpRequestPort from '@/src/infra/http-request/http-request-port';

async function logoff() {
    try {
        const response = await HttpRequestPort.post({
            path: '/logoff',
        });

        if (!response) throw new Error();

        await AsyncStorage.removeItem('userToken');

        return true;
    } catch (error) {
        console.warn({ error });
        return false;
    }
}

const AuthProfileUsecase = {
    logoff
};

export default AuthProfileUsecase;

