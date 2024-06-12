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
import GoBackButton from '@/src/components/go-back-button.ui';
import Icon from '@/src/components/icon.ui';
import t from '@/src/shared/i18n/i18n';
import AuthSigninUsecase from '@/src/shared/usecase/auth-signin.usecase';

function SignInPage({ ...props }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

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

            throw new Error('Ocorreu um erro ao fazer login, tente novamente.');
        } catch (error: any) {
            Alert.alert('Login Error', error.message);
        }
    };

    function togglePasswordVisibility() {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <SafeAreaView {...props} style={styles.pageContainer}>
            <View style={styles.container}>
                <CompanyBanner />

                <TextInput
                    placeholder={t('auth.email')}
                    style={styles.textInput}
                    onChangeText={(text) => setEmail(text)}
                />

                <View style={styles.passwordContainer}>
                    <TextInput
                        placeholder={t('auth.password')}
                        style={styles.textInput}
                        secureTextEntry={!passwordVisible}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity
                        onPress={togglePasswordVisibility}
                        style={styles.icon}
                    >
                        <Icon
                            name={passwordVisible ? 'eye' : 'eye-slash'}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={onSignInPress} style={styles.button}>
                    <Text style={styles.text}>
                        {t('common.signIn').toUpperCase()}
                    </Text>
                </TouchableOpacity>

                <GoBackButton />
            </View>
        </SafeAreaView>
    );
}

export default SignInPage;
