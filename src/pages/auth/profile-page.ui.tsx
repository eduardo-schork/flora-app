import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React, { useState, useEffect } from 'react';
import {
    Alert,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import styles from './profile.styles';

import CompanyBanner from '@/src/components/company-banner.ui';
import HttpRequestPort from '@/src/infra/http-request/http-request-port';
import t from '@/src/shared/i18n/i18n';
import AuthProfileUsecase from '@/src/shared/usecase/auth-profile.usecase';

interface User {
    name: string;
    email: string;
}

interface UserResponse {
    status: string;
    user: User;
    message?: string;
}

function ProfilePage({ ...props }) {
    const [userData, setUserData] = useState<User | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');

                const response: UserResponse = await HttpRequestPort.post({
                    path: '/secure-endpoint',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.status === 'success') {
                    setUserData(response.user);
                } else {
                    throw new Error(response.message);
                }
            } catch (error: any) {
                Alert.alert('Error', error.message);
            }
        };

        fetchUserData();
    }, []);

    const onProfilePress = async () => {
        try {
            const result = await AuthProfileUsecase.logoff();
            if (result) {
                router.replace('/');
            } else {
                throw new Error('Logoff failed');
            }
        } catch (error: any) {
            Alert.alert('Logoff Error', error.message);
        }
    };

    return (
        <SafeAreaView {...props} style={styles.pageContainer}>
            <View style={styles.container}>
                {userData && (
                    <>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Name</Text>
                            <TextInput
                                style={styles.textInput}
                                value={userData.name}
                                editable={false}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.textInput}
                                value={userData.email}
                                editable={false}
                            />
                        </View>
                    </>
                )}

                <TouchableOpacity
                    onPress={onProfilePress}
                    style={styles.button}
                >
                    <Text style={styles.text}>
                        {t('common.logoff').toUpperCase()}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default ProfilePage;
