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
    }
});
