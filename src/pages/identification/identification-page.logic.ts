import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import { TPrediction } from '@/src/shared/types/prediction.types';
import PredictImageUsecase from '@/src/shared/usecase/predict-image.usecase';

export type TPictureData = {
    uri: string;
    base64?: string | null;
};

const useIdentificationPageLogic = () => {
    const [selectedModel, setSelectedModel] = useState<string>('');
    const [pictureData, setPictureData] = useState<TPictureData>();
    const [predictionResponse, setPredictionResponse] = useState<TPrediction>();

    function onPressTryAgain() {
        setPictureData(undefined);
        setPredictionResponse(undefined);
    }

    function onChangeSelectedModel(newModel: string) {
        setSelectedModel(newModel);
    }

    async function openImagePicker() {
        const result = await ImagePicker.launchImageLibraryAsync({
            quality: 1,
            selectionLimit: 1,
            allowsMultipleSelection: false,
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });

        if (result.canceled) return;

        const selectedImage = result.assets?.[0];
        if (!selectedImage) return;

        const imageData = {
            uri: selectedImage?.uri,
            base64: selectedImage?.base64
        };

        setPictureData(imageData);

        sendImageToPredict(imageData?.uri);
    }

    async function sendImageToPredict(imageUri?: string | null) {
        const uri = imageUri || pictureData?.uri;

        const response = await PredictImageUsecase.execute(uri);

        if (!response) return;

        setPredictionResponse(response);
    }

    return {
        pictureData,
        selectedModel,
        openImagePicker,
        onPressTryAgain,
        predictionResponse,
        sendImageToPredict,
        onChangeSelectedModel
    };
};

export default useIdentificationPageLogic;
