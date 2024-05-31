import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

import { styles } from './identification-page.styles';

import Icon from '@/src/components/icon.ui';
import t from '@/src/shared/i18n/i18n';
import Colors from '@/src/shared/styles/Colors';

const AVALIABLE_MODELS = [
    { key: '1', value: 'convnet' },
    { key: '2', value: 'inceptionv3' },
    { key: '3', value: 'vgg16' }
];

function SelectPictureScreen({
    openImagePicker,
    onChangeSelectedModel,
    ...props
}: {
    openImagePicker: () => void;
    onChangeSelectedModel: (newModel: string) => void;
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

            <SelectList
                save="value"
                data={AVALIABLE_MODELS}
                setSelected={onChangeSelectedModel}
                dropdownStyles={{ borderColor: Colors.primary }}
                boxStyles={{ width: '80%', borderColor: Colors.primary }}
            />
        </View>
    );
}

export default SelectPictureScreen;
