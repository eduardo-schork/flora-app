import AsyncStorage from '@react-native-async-storage/async-storage';
import { Tabs } from 'expo-router';
import { Screen } from 'expo-router/build/views/Screen';
import React, { useState, useEffect } from 'react';

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
        tabBarStyle: {
            display: isAnonymous ? 'none' : 'flex'
        },
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true)
    };

    return (
        <Tabs screenOptions={{ ...tabsConfig }}>
            {isAnonymous ? (
                <Screen
                    name="feed"
                    options={{
                        title: t('common.feed'),
                        tabBarIcon: ({ color }: { color: string }) => (
                            <Icon name="feed" color={color} />
                        )
                    }}
                />
            ) : null}

            <Screen
                name="identification"
                options={{
                    title: t('common.identification'),
                    tabBarIcon: ({ color }: { color: string }) => (
                        <Icon name="photo" color={color} />
                    )
                }}
            />

            {isAnonymous ? (
                <Screen
                    name="profile"
                    options={{
                        title: t('common.profile'),
                        tabBarIcon: ({ color }: { color: string }) => (
                            <Icon name="user" color={color} />
                        )
                    }}
                />
            ) : null}
        </Tabs>
    );
}
