import { StyleSheet } from 'react-native';

import Colors from '@/src/shared/styles/Colors';

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
    },
    button: {
        height: 60,
        width: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 6,
        marginBottom: 20,
        justifyContent: 'center',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: Colors.primary,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    textInput: {
        padding: 15,
        height: 60,
        fontSize: 16,
        backgroundColor: 'whitesmoke',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    container: {
        flex: 1,
        gap: 20,
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});

export default styles;
