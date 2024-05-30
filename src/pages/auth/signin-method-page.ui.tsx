import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import styles from './signin.styles';

import CompanyBanner from '@/src/components/company-banner.ui';
import t from '@/src/shared/i18n/i18n';
import Colors from '@/src/shared/styles/Colors';
import AuthSigninUsecase from '@/src/shared/usecase/auth-signin.usecase';

function SigninMethodPage({ ...props }) {
    useEffect(() => {
        (async () => {
            const isUserLogged = await AuthSigninUsecase.getIsUserLogged();
            if (isUserLogged) {
                router.replace('/(tabs)/feed');
            }
        })();
    }, []);

    function onSignInPress() {
        router.replace('/signin');
    }

    function onAnonymSignInPress() {
        // router.replace('/signin');
    }
    function onRegisterPress() {
        router.replace('/register');
    }

    return (
        <SafeAreaView {...props} style={styles.pageContainer}>
            <View style={styles.container}>
                <CompanyBanner />

                <TouchableOpacity onPress={onSignInPress} style={styles.button}>
                    <Text style={styles.text}>
                        {t('common.signIn').toUpperCase()}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={onAnonymSignInPress}
                    style={{
                        ...styles.button,
                        backgroundColor: Colors.gray
                    }}
                >
                    <Text style={styles.text}>
                        {t('common.anonymAccess').toUpperCase()}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={onRegisterPress}
                    style={{
                        ...styles.button,
                        backgroundColor: 'transparent'
                    }}
                >
                    <Text style={{
                        ...styles.text,
                        color: Colors.third
                    }}>
                        {t('common.register')}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default SigninMethodPage;
