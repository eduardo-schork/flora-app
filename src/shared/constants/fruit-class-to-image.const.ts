import { ImageSourcePropType } from 'react-native';

import { PREDICTION_CLASS } from './prediction-class.const';

const FRUIT_IMAGES: Record<string, ImageSourcePropType> = {
    [PREDICTION_CLASS.PEACH]: require('@/assets/images/predict-classes/peach.png'),
    [PREDICTION_CLASS.POMEGRANATE]: require('@/assets/images/predict-classes/pomegranate.png'),
    [PREDICTION_CLASS.STRAWBERRY]: require('@/assets/images/predict-classes/strawberry.png')
};

export default FRUIT_IMAGES;
