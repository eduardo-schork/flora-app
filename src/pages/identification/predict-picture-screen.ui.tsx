import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import FeedbackModal from './components/feedback-modal.ui';
import FruitSelectionModal from './components/fruit-selection-modal.ui';
import PredictionResponse from './components/prediction-response.ui';
import { TPictureData } from './identification-page.logic';
import { styles } from './identification-page.styles';

import Divider from '@/src/components/divider.ui';
import t from '@/src/shared/i18n/i18n';
import { TPrediction } from '@/src/shared/types/prediction.types';

type TPredictPictureScreenProps = {
    pictureData?: TPictureData;
    predictionResponse?: TPrediction;
    onPressTryAgain: () => void;
    selectedModel: string;
    postImage: () => void;
    saveFruitSelection: (fruit: string) => void;
};

function PredictPictureScreen({
    pictureData,
    selectedModel,
    predictionResponse,
    onPressTryAgain,
    postImage,
    saveFruitSelection,
    ...props
}: TPredictPictureScreenProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const [feedbackModalVisible, setFeedbackModalVisible] = useState(false);
    const [buttonsVisible, setButtonsVisible] = useState(true);
    const [isAnonymous, setIsAnonymous] = useState<boolean>(false);

    const predictionData = predictionResponse?.[selectedModel];
    const predominantClass = predictionData?.predominantClass || '';

    useEffect(() => {
        async function checkLoginStatus() {
            const token = await AsyncStorage.getItem('userToken');
            if (!token) {
                setIsAnonymous(true);
            }
        }

        checkLoginStatus();
    }, []);

    const handleConfirm = () => {
        saveFruitSelection(predominantClass);
        setButtonsVisible(false);
        setFeedbackModalVisible(true);
    };

    const handleDisagree = () => {
        setModalVisible(true);
    };

    const handleFruitSelection = (fruit: string) => {
        console.log({ fruit });
        saveFruitSelection(fruit);
        setModalVisible(false);
        setButtonsVisible(false);
        setFeedbackModalVisible(true);
    };

    return (
        <View style={styles.container} {...props}>
            <Image
                resizeMode="stretch"
                source={{ uri: pictureData?.uri }}
                style={styles.selectedPictureImage}
            />
            <Divider />

            <View style={styles.predictionResponseContainer}>
                {!predictionResponse ? (
                    <ActivityIndicator />
                ) : (
                    <PredictionResponse
                        prediction={predictionData}
                        selectedModel={selectedModel}
                    />
                )}
            </View>

            {predictionResponse && buttonsVisible && !isAnonymous && (
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.confirmButton}
                        onPress={handleConfirm}
                    >
                        <Text style={styles.buttonText}>
                            {t('picture.confirm')}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.denyButton}
                        onPress={handleDisagree}
                    >
                        <Text style={styles.buttonText}>
                            {t('picture.deny')}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}

            <TouchableOpacity
                style={styles.sendNewImage}
                onPress={onPressTryAgain}
            >
                <Text style={styles.buttonText}>
                    {t('common.sendNewImage')}
                </Text>
            </TouchableOpacity>

            <FeedbackModal
                visible={feedbackModalVisible}
                onClose={() => setFeedbackModalVisible(false)}
                onPost={() => {
                    setFeedbackModalVisible(false);
                    postImage();
                }}
            />

            <FruitSelectionModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSelectFruit={handleFruitSelection}
            />
        </View>
    );
}

export default PredictPictureScreen;
