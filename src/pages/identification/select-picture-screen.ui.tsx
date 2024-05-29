import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './identification-page.styles';

import Icon from '@/src/components/icon.ui';
import t from '@/src/shared/i18n/i18n';
import Colors from '@/src/shared/styles/Colors';

function SelectPictureScreen({
    openImagePicker,
    ...props
}: {
    openImagePicker: () => void;
}) {
    return (
        <View style={styles.container} {...props}>
            <Text style={styles.text}>{t('identification.selectMethod')}</Text>

            <View style={styles.methodsContainer}>
                <TouchableOpacity style={styles.actionButton}>
                    <Icon name="camera" size={60} color={Colors.primary} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={openImagePicker}
                >
                    <Icon name="upload" size={60} color={Colors.primary} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SelectPictureScreen;
