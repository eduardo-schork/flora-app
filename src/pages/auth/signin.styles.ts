import { StyleSheet } from 'react-native';

import Colors from '@/src/shared/styles/Colors';

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center'
    },

    passwordContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        padding: 8,
        height: 60,
        fontSize: 16,
        backgroundColor: 'whitesmoke',
        borderRadius: 6,
        position: 'relative',
    },

    icon: {
        position: 'absolute',
        right: 10,
        padding: 10,
    },

    button: {
        height: 60,
        width: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 6,
        justifyContent: 'center'
    },

    textInput: {
        padding: 8,
        height: 60,
        fontSize: 16,
        backgroundColor: 'whitesmoke',
        borderRadius: 6
    },

    container: {
        flex: 1,
        gap: 20,
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center'
    }
});

export default styles;
