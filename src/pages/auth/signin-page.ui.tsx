import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import styles from './signin.styles';

import CompanyBanner from '@/src/components/company-banner.ui';
import t from '@/src/shared/i18n/i18n';
import AuthSigninUsecase from '@/src/shared/usecase/auth-signin.usecase';

function SignInPage({ ...props }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPress = async () => {
        try {
            const isUserLogged = await AuthSigninUsecase.execute(
                email,
                password
            );

            if (isUserLogged) {
                router.replace('/(tabs)/feed');
                return;
            }

            throw new Error();
        } catch (error: any) {
            Alert.alert('Login Error', error.message);
        }
    };

    return (
        <SafeAreaView {...props} style={styles.pageContainer}>
            <View style={styles.container}>
                <CompanyBanner />

                <TextInput
                    placeholder={t('auth.name')}
                    style={styles.textInput}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    placeholder={t('auth.password')}
                    style={styles.textInput}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity onPress={onSignInPress} style={styles.button}>
                    <Text style={styles.text}>
                        {t('common.signIn').toUpperCase()}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default SignInPage;
