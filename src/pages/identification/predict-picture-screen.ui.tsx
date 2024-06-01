import React, { useState } from 'react';
import { ActivityIndicator, Button, Image, View, Alert, Modal, Text, TouchableOpacity } from 'react-native';
import PredictionResponse from './components/prediction-response.ui';
import { TPictureData } from './identification-page.logic';
import { styles } from './identification-page.styles';
import Divider from '@/src/components/divider.ui';
import t from '@/src/shared/i18n/i18n';
import Colors from '@/src/shared/styles/Colors';
import { TPrediction } from '@/src/shared/types/prediction.types';

type TPredictPictureScreenProps = {
    pictureData?: TPictureData;
    predictionResponse?: TPrediction;
    onPressTryAgain: () => void;
    postImage: () => void;
    saveFruitSelection: (fruit: string) => void;
    selectedModel: string;
};

function PredictPictureScreen({
    pictureData,
    predictionResponse,
    onPressTryAgain,
    postImage,
    saveFruitSelection,
    selectedModel,
    ...props
}: TPredictPictureScreenProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const [buttonsVisible, setButtonsVisible] = useState(true);
    const predictionData = predictionResponse?.['inceptionv3'];

    const handleConfirm = () => {
        Alert.alert(
            t('picture.invalidate'),
            t('picture.postQuestion'),
            [
                {
                    text: t('common.cancel'),
                    style: "cancel"
                },
                { text: t('picture.post'), onPress: () => postImage() }
            ],
            { cancelable: false }
        );
        setButtonsVisible(false);
    };

    const handleDisagree = () => {
        setModalVisible(true);
    };

    const handleFruitSelection = (fruit: string) => {
        saveFruitSelection(fruit);
        setModalVisible(false);
        setButtonsVisible(false);
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
            {predictionResponse && buttonsVisible ? (
                <>
                    <View style={styles.buttonsContainer}>
                        <Button title={t('picture.confirm')} onPress={handleConfirm} />
                        <Button title={t('picture.deny')} onPress={handleDisagree} />
                    </View>
                </>
            ) : null}
            <Button
                color={Colors.primary}
                onPress={onPressTryAgain}
                title={t('common.sendNewImage')}
            />
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{t('picture.fruit')}</Text>
                        {['Morango', 'Pêssego', 'Romã', 'Nenhuma'].map(fruit => (
                            <TouchableOpacity
                                key={fruit}
                                style={styles.modalButton}
                                onPress={() => handleFruitSelection(fruit)}
                            >
                                <Text style={styles.modalButtonText}>{fruit}</Text>
                            </TouchableOpacity>
                        ))}
                        <Button title={t('common.cancel')} onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default PredictPictureScreen;
