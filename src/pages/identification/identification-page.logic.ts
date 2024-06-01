import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import { TPrediction } from '@/src/shared/types/prediction.types';
import PredictImageUsecase from '@/src/shared/usecase/predict-image.usecase';
import axios from 'axios';
import AxiosRequestAdapter from '@/src/infra/http-request/axios-request-adapter';

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

    async function postImage() {
        try {
            if (!pictureData) {
                console.log("Nenhuma imagem selecionada.");
                return;
            }

            const formData = new FormData();
            const imageBlob = await fetch(pictureData.uri).then((res) => res.blob());

            formData.append('image', imageBlob, 'photo.jpg');

            // Adicione outros campos necessários para a sua rota
            formData.append('user_id', 'seu_user_id');
            formData.append('predicted_percentage', '');
            formData.append('predicted_class', '');
            formData.append('feedback_class', selectedFruit || ''); // Selecione a fruta ou vazio se não houver seleção
            formData.append('model_type', selectedModel);

            // Configure os headers necessários, se houver
            const headers = {
                'Content-Type': 'multipart/form-data',
            };

            // Faça a solicitação usando AxiosRequestAdapter
            const response = await AxiosRequestAdapter.post({
                path: '/post-feed',
                body: formData,
                headers,
            });

            if (response.status === 201) {
                console.log('Imagem postada com sucesso');
                // Você pode lidar com a resposta daqui, se necessário
            }
        } catch (error) {
            console.error('Erro ao postar a imagem:', error);
            // Lide com o erro aqui
        }
    }


    function saveFruitSelection(fruit: string) {
        setSelectedFruit(fruit);
        console.log(`Fruta selecionada: ${fruit}`);
        // Aqui você pode adicionar lógica adicional para lidar com a seleção da fruta
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
