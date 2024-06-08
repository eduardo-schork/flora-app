import { StyleSheet } from 'react-native';

import Colors from '@/src/shared/styles/Colors';

export const styles = StyleSheet.create({
    methodsContainer: {
        gap: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },

    selectedPictureImage: {
        width: '100%',
        minHeight: '40%',
        maxHeight: '40%'
    },

    text: {
        fontSize: 20,
        alignSelf: 'center',
        color: Colors.fourth,
        textAlign: 'center',
    },
    textIdentification: {
        fontSize: 20,
        alignSelf: 'center',
        color: Colors.primary
    },

    actionButton: {
        justifyContent: 'center',
        alignSelf: 'center'
    },

    container: {
        flex: 1,
        gap: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: Colors.white,
        borderRadius: 10,
        alignItems: 'center'
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 10
    },
    modalButton: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: Colors.primary,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center'
    },
    modalButtonText: {
        color: Colors.white,
        fontSize: 16
    },
    buttonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    confirmButton: {
        flex: 1,
        backgroundColor: '#45B742', 
        borderRadius: 20,
        marginHorizontal: 10, 
        justifyContent: 'center', 
        alignItems: 'center', 
        minWidth: 150, 
    },
    denyButton: {
        flex: 1,
        backgroundColor: '#FF0000', 
        borderRadius: 20, 
        marginHorizontal: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 150, 
    },
    sendNewImage: {
        backgroundColor: Colors.primary, 
        borderRadius: 20, 
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 200, 
        marginBottom: 35
    },
    cancelButton: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#CCCCCC', 
        borderRadius: 5,
        width: '100%',
        alignItems: 'center'
    },
    predictionResponseContainer: {
        flex: 1,
        marginBottom: 10
    }
});
