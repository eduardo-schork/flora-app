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
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: -30
    },
    predictionResponseContainer: {
        flex: 1,
        marginBottom: 10
    }
});
