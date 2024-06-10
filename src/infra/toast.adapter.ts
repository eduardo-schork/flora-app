import { Platform, ToastAndroid } from 'react-native';

function show(message: string) {
    if (Platform.OS === 'android') {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    }
}

const ToastAdapter = {
    show
};

export default ToastAdapter;
