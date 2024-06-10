import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

import { styles } from './identification-page.styles';

import Icon from '@/src/components/icon.ui';
import ToastAdapter from '@/src/infra/toast.adapter';
import t from '@/src/shared/i18n/i18n';
import Colors from '@/src/shared/styles/Colors';

const AVALIABLE_MODELS = [
    // { key: '1', value: 'convnet' },
    { key: '2', value: 'inceptionv3' },
    { key: '3', value: 'vgg16' }
];

function SelectPictureScreen({
    selectedModel,
    openImagePicker,
    onChangeSelectedModel,
    ...props
}: {
    selectedModel: string;
    openImagePicker: () => void;
    onChangeSelectedModel: (newModel: string) => void;
}) {
    function onPressOpenImagePicker() {
        if (selectedModel) {
            openImagePicker();
        } else {
            ToastAdapter.show('Selecione um modelo antes de continuar');
        }
    }

    return (
        <View style={styles.container} {...props}>
            <Text style={styles.textIdentification}>
                {t('identification.selectMethod')}
            </Text>

            <View style={styles.methodsContainer}>
                <TouchableOpacity style={styles.actionButton}>
                    <Icon name="camera" size={60} color={Colors.primary} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={onPressOpenImagePicker}
                >
                    <Icon name="upload" size={60} color={Colors.primary} />
                </TouchableOpacity>
            </View>

            <SelectList
                save="value"
                data={AVALIABLE_MODELS}
                setSelected={onChangeSelectedModel}
                placeholder={t('identification.trainingModels')}
                dropdownStyles={{ borderColor: Colors.primary, maxHeight: 130 }}
                boxStyles={{ width: '80%', borderColor: Colors.primary }}
            />
        </View>
    );
}

export default SelectPictureScreen;
