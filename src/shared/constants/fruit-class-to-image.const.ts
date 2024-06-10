import { ImageSourcePropType } from 'react-native';

import { PREDICTION_CLASS } from './prediction-class.const';
import peachImage from '../../../assets/images/peach.png';
import pomegranateImage from '../../../assets/images/pomegranate.png';
import strawberryImage from '../../../assets/images/strawberry.png';

const FRUIT_IMAGES: Record<string, ImageSourcePropType> = {
    [PREDICTION_CLASS.PEACH]: peachImage,
    [PREDICTION_CLASS.POMEGRANATE]: pomegranateImage,
    [PREDICTION_CLASS.STRAWBERRY]: strawberryImage
};

export default FRUIT_IMAGES;
