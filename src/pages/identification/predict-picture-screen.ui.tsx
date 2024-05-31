import React from 'react';
import { ActivityIndicator, Button, Image, View } from 'react-native';

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
    selectedModel: string;
};

function PredictPictureScreen({
    selectedModel,
    pictureData,
    predictionResponse,
    onPressTryAgain,
    ...props
}: TPredictPictureScreenProps) {
    const predictionData = predictionResponse?.[selectedModel];

    return (
        <View style={styles.container} {...props}>
            <Image
                resizeMode="stretch"
                source={{ uri: pictureData?.uri }}
                style={styles.selectedPictureImage}
            />

            <Divider />

            <View style={{ flex: 1 }}>
                {!predictionResponse ? (
                    <ActivityIndicator />
                ) : (
                    <PredictionResponse
                        selectedModel={selectedModel}
                        prediction={predictionData}
                    />
                )}
            </View>

            {predictionResponse ? (
                <>
                    <View style={{ flexDirection: 'row' }}>
                        <Button title="Confirmar" />
                        <Button title="Discordar" />
                    </View>

                    <Button
                        color={Colors.primary}
                        onPress={onPressTryAgain}
                        title={t('common.sendNewImage')}
                    />
                </>
            ) : null}
        </View>
    );
}

export default PredictPictureScreen;
