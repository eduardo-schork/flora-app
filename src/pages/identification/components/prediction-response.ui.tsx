import { Text, View } from 'react-native';

import PredictedFruitDetails from './predicted-fruit-details.ui';
import { styles } from '../identification-page.styles';

import { PREDICTION_CLASS_NAME } from '@/src/shared/constants/prediction-class.const';
import t from '@/src/shared/i18n/i18n';
import { TFruitPrediction } from '@/src/shared/types/prediction.types';

function PredictionResponse({
    prediction,
    ...props
}: {
    prediction?: TFruitPrediction;
}) {
    const predominantClass = prediction?.predominantClass || '';
    const predictionAssurance = prediction?.percentages?.[predominantClass];

    const predominantClassFormatted = PREDICTION_CLASS_NAME?.[predominantClass];

    return (
        <View {...props} style={{ flex: 1, gap: 20 }}>
            <Text style={styles.text}>
                {t('identification.predictResponse', predominantClassFormatted)}
            </Text>

            <PredictedFruitDetails
                fruitClass={predominantClass}
                percentage={predictionAssurance}
            />
        </View>
    );
}

export default PredictionResponse;
