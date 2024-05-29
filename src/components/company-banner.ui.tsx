import { Image, StyleSheet, Text, View } from 'react-native';

import t from '../shared/i18n/i18n';
import Colors from '../shared/styles/Colors';

function CompanyBanner({ ...props }) {
    return (
        <View style={companyBannerStyles.container} {...props}>
            <Text style={companyBannerStyles.title}>
                {t('common.floraGroup')}
            </Text>

            <Image
                style={companyBannerStyles.imageBanner}
                source={require('@/assets/images/flora-banner.png')}
            />
        </View>
    );
}

const companyBannerStyles = StyleSheet.create({
    container: {
        gap: 6
    },

    title: {
        fontSize: 24,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.primary
    },

    imageBanner: {
        alignSelf: 'center'
    }
});

export default CompanyBanner;
