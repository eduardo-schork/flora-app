import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './feed-page.styles';
import t from '@/src/shared/i18n/i18n';

const FeedPage = () => {
    const mockImages = [
        'https://via.placeholder.com/300.png?text=Fruta+1',
        'https://via.placeholder.com/300.png?text=Fruta+2',
        'https://via.placeholder.com/300.png?text=Fruta+3',
    ];

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
            {mockImages.map((imageUri, index) => (
                <View key={index} style={styles.card}>
                    <Image source={{ uri: imageUri }} style={styles.image} />
                    <View style={styles.label}>
                        <Text style={styles.labelText}>70%</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

export default FeedPage;
