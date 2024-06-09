import { Tabs, router} from 'expo-router';
import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Screen } from 'expo-router/build/views/Screen';

import Icon from '@/src/components/icon.ui';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';
import { useColorScheme } from '@/src/components/useColorScheme';
import t from '@/src/shared/i18n/i18n';
import Colors from '@/src/shared/styles/Colors';

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const [isAnonymous, setIsAnonymous] = useState<boolean>(false);

    useEffect(() => {
        async function checkLoginStatus() {
            const token = await AsyncStorage.getItem('userToken');
            if (!token) {
                setIsAnonymous(true);
            }
        }

        checkLoginStatus();
    }, []);

    const tabsConfig = {
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true)
    };

    const handleLoginPress = () => {
        router.replace('/');
    };

    const handleCancelPress = () => {
        router.replace('/(tabs)/identification');
    };

    const handleTabPress = (tabName: string) => {
        if (isAnonymous && (tabName === 'feed' || tabName === 'profile')) {
            Alert.alert(
                'Aviso',
                'Você precisa estar logado para acessar essa rotina',
                [
                    {
                        text: 'Cancelar',
                        onPress: handleCancelPress,
                        style: 'cancel'
                    },
                    {
                        text: 'Logar',
                        onPress: handleLoginPress
                    }
                ],
                { cancelable: false }
            );
            return true;
        }
        return false;
    };

    return (
        <Tabs screenOptions={{ ...tabsConfig }}>
            {!isAnonymous && (
                <Screen
                    name="feed"
                    options={{
                        title: t('common.feed'),
                        tabBarIcon: ({ color }: { color: string }) => (
                            <Icon name="feed" color={color} />
                        )
                    }}
                />
            )}

            <Screen
                name="identification"
                options={{
                    title: t('common.identification'),
                    tabBarIcon: ({ color }: { color: string }) => (
                        <Icon name="feed" color={color} />
                    )
                }}
            />

            {!isAnonymous && (
                <Screen
                    name="profile"
                    options={{
                        title: t('common.profile'),
                        tabBarIcon: ({ color }: { color: string }) => (
                            <Icon name="feed" color={color} />
                        )
                    }}
                />
            )}
        </Tabs>
    );
}
