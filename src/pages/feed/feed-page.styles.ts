import { StyleSheet } from 'react-native';
import Colors from '@/src/shared/styles/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: 10,
    },
    card: {
        backgroundColor: Colors.white,
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        width: '100%',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    label: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    labelText: {
        color: Colors.white,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    button: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    validateButton: {
        backgroundColor: Colors.primary,
        marginRight: 5,
    },
    invalidateButton: {
        backgroundColor: Colors.secondary,
        marginLeft: 5,
    },
    buttonText: {
        color: Colors.white,
        fontWeight: 'bold',
    },
});

export default styles;
