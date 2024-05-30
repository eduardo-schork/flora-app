import mime from 'mime';

import { TPrediction } from '../types/prediction.types';

import HttpRequestPort from '@/src/infra/http-request/http-request-port';

async function execute(imageUri?: string) {
    if (!imageUri) return;

    try {
        const formData = new FormData();

        const file: any = {
            uri: imageUri,
            name: 'image',
            type: mime.getType(imageUri)
        };

        formData.append('image', file);

        const response = await HttpRequestPort.post<TPrediction>({
            path: '/predict',
            body: formData
        });

        return response;
    } catch (error) {
        console.log(error?.message);
        console.warn({ error });
    }
}

const PredictImageUsecase = {
    execute
};

export default PredictImageUsecase;
