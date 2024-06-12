import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider
} from '@react-navigation/native';
import { Stack } from 'expo-router';

import { useColorScheme } from '@/src/components/useColorScheme';

function RootLayoutNav({ ...props }) {
    const colorScheme = useColorScheme();
    const themeScheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

    return (
        <ThemeProvider {...props} value={themeScheme}>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="signin" options={{ headerShown: false }} />
                <Stack.Screen
                    name="register"
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </ThemeProvider>
    );
}

export default RootLayoutNav;
