import { router } from 'expo-router';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import styles from './signin.styles';

import CompanyBanner from '@/src/components/company-banner.ui';
import t from '@/src/shared/i18n/i18n';
import Colors from '@/src/shared/styles/Colors';

function SigninMethodPage({ ...props }) {
    function onSignInPress() {
        router.replace('/signin');
    }
    function onAnonymSignInPress() {
        // router.replace('/signin');
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
            </View>
        </SafeAreaView>
    );
}

export default SigninMethodPage;
