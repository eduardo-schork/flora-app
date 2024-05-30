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
import AuthProfileUsecase from '@/src/shared/usecase/auth-profile.usecase';
import Icon from '@/src/components/icon.ui';

function ProfilePage({ ...props }) {
    const onProfilePress = async () => {
        try {
            const result = await AuthProfileUsecase.logoff();
            if (result) {
                router.replace('/');
            } else {
                throw new Error('Logoff failed');
            }
        } catch (error : any) {
            Alert.alert('Logoff Error', error.message);
        }
    };

    return (
        <SafeAreaView {...props} style={styles.pageContainer}>
            <View style={styles.container}>
                <CompanyBanner />

                <TouchableOpacity onPress={onProfilePress} style={styles.button}>
                    <Text style={styles.text}>
                        {t('common.logoff').toUpperCase()}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default ProfilePage;
