import { Tabs } from 'expo-router';
import React from 'react';

import Icon from '@/src/components/icon.ui';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';
import { useColorScheme } from '@/src/components/useColorScheme';
import t from '@/src/shared/i18n/i18n';
import Colors from '@/src/shared/styles/Colors';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    const tabsConfig = {
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true)
    };

    return (
        <Tabs screenOptions={{ ...tabsConfig }}>
            <Tabs.Screen
                name="feed"
                options={{
                    title: t('common.feed'),
                    tabBarIcon: ({ color }) => (
                        <Icon name="feed" color={color} />
                    )
                }}
            />

            <Tabs.Screen
                name="identification"
                options={{
                    title: t('common.identification'),
                    tabBarIcon: ({ color }) => (
                        <Icon name="photo" color={color} />
                    )
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: t('common.profile'),
                    tabBarIcon: ({ color }) => (
                        <Icon name="user" color={color} />
                    )
                }}
            />
        </Tabs>
    );
}
