import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Icon from './icon.ui';

function GoBackButton({ navigationUrl, ...props }: { navigationUrl?: string }) {
    function onButtonPress() {
        if (navigationUrl) {
            // @ts-ignore
            router.replace(navigationUrl);
            return;
        }

        router.replace('/');
    }

    return (
        <TouchableOpacity
            {...props}
            onPress={onButtonPress}
            style={{
                flexDirection: 'row',
                gap: 4
            }}
        >
            <Icon name="arrow-left" size={16} style={{ alignSelf: 'center' }} />
            <Text style={{ alignSelf: 'center' }}>Voltar</Text>
        </TouchableOpacity>
    );
}

export default GoBackButton;
