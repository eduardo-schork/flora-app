import * as ImagePicker from 'expo-image-picker';
import mime, { Mime } from 'mime';
import { useCallback, useState } from 'react';

import HttpRequestPort from '@/src/infra/http-request/http-request-port';
import ToastAdapter from '@/src/infra/toast.adapter';
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
    const [selectedFruit, setSelectedFruit] = useState<string | null>(null);

    function onPressTryAgain() {
        setPictureData(undefined);
        setPredictionResponse(undefined);
        setSelectedFruit(null);
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

    const postImage = async () => {
        try {
            const uri = pictureData?.uri;

            const predominantClass =
                predictionResponse?.[selectedModel].predominantClass;

            const predictionAssurance =
                predictionResponse?.[selectedModel].percentages?.[
                    predominantClass
                ];

            const formData = new FormData();

            const file: any = {
                uri,
                name: 'image',
                type: mime.getType(uri)
            };

            formData.append('image', file);
            formData.append('feedback_class', selectedFruit);
            formData.append('predicted_class', predominantClass);
            formData.append('predicted_percentage', predictionAssurance);
            formData.append('model_type', selectedModel);

            await HttpRequestPort.post({
                path: '/post-feed',
                body: formData,
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            ToastAdapter.show('Postagem feita com successo!');
        } catch (error) {
            console.error('Erro ao postar a imagem:', error);
            ToastAdapter.show(
                'Não foi possível realizar a postagem, tente novamente.'
            );
        }
    };

    function saveFruitSelection(fruit: string) {
        setSelectedFruit(fruit);
    }

    return {
        pictureData,
        selectedModel,
        openImagePicker,
        onPressTryAgain,
        predictionResponse,
        sendImageToPredict,
        onChangeSelectedModel,
        postImage,
        saveFruitSelection
    };
};

export default useIdentificationPageLogic;
