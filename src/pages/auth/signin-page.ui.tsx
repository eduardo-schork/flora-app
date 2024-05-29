import { router } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import styles from './signin.styles';

import CompanyBanner from '@/src/components/company-banner.ui';
import t from '@/src/shared/i18n/i18n';

function SignInPage({ ...props }) {
    function onSignInPress() {
        router.replace('/(tabs)/feed');
    }

    return (
        <SafeAreaView {...props} style={styles.pageContainer}>
            <View style={styles.container}>
                <CompanyBanner />

                <TextInput
                    placeholder={t('auth.name')}
                    style={styles.textInput}
                />

                <TextInput
                    placeholder={t('auth.password')}
                    style={styles.textInput}
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
