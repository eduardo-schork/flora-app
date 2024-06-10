import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Image, FlatList, RefreshControl } from 'react-native';

import styles from './feed-page.styles';

import Divider from '@/src/components/divider.ui';
import { PREDICTION_CLASS_NAME } from '@/src/shared/constants/prediction-class.const';
import FindFeedPostsUsecase from '@/src/shared/usecase/find-feed-posts.usecase';

const FeedPage = () => {
    const [postsList, setPostsList] = useState<any>([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchPosts = async () => {
        const postsData: any = await FindFeedPostsUsecase.execute();
        setPostsList(postsData);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchPosts().then(() => setRefreshing(false));
    }, []);

    // TODO atomize
    const renderItem = ({ item, index }: { item: any; index: number }) => (
        <View key={index} style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item?.image_url }} style={styles.image} />
                <View style={styles.label}>
                    <Text style={styles.labelText}>
                        {item?.predicted_percentage}%
                    </Text>
                </View>
                <View style={styles.modelLabel}>
                    <Text style={styles.labelText}>{item?.model_type}</Text>
                </View>
            </View>

            <Divider orientation="horizontal" />

            <View style={styles.infoContainer}>
                <Text style={styles.predictedText}>
                    Classe predita:{' '}
                    {PREDICTION_CLASS_NAME[item?.predicted_class]}
                </Text>
                <Text style={styles.correctText}>
                    Classe correta:{' '}
                    {PREDICTION_CLASS_NAME[item?.feedback_class]}
                </Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={postsList}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.flatList}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        />
    );
};

export default FeedPage;
