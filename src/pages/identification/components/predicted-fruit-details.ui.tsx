import { Button, Image, StyleSheet, Text, View } from 'react-native';

import FRUIT_IMAGES from '@/src/shared/constants/fruit-class-to-image.const';
import t from '@/src/shared/i18n/i18n';
import Colors from '@/src/shared/styles/Colors';

function PredictedFruitDetails({
    fruitClass,
    percentage,
    ...props
}: {
    fruitClass?: string;
    percentage?: number;
}) {
    if (!fruitClass) return null;

    return (
        <>
            <View style={styles.predictedClassContainer} {...props}>
                <Image
                    style={styles.predictedFruitImage}
                    source={FRUIT_IMAGES?.[fruitClass]}
                />
                <Text style={styles.predictionPercentageText}>
                    {percentage}%
                </Text>
            </View>

            <Text style={{ alignSelf: 'center' }}>
                {t('identification.predictionPercentage', percentage)}
            </Text>
        </>
    );
}

const styles = StyleSheet.create({
    predictionPercentageText: {
        fontWeight: 'bold',
        alignSelf: 'center',
        color: Colors.secondary
    },

    predictedFruitImage: {
        width: 40,
        height: 40
    },

    predictedClassContainer: {
        elevation: 2,

        width: 120,
        padding: 6,
        borderRadius: 10,
        backgroundColor: Colors.gray,
        marginBottom: -15,

        display: 'flex',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default PredictedFruitDetails;
