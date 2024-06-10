import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

import { styles } from '../identification-page.styles';

import {
    PREDICTION_CLASS,
    PREDICTION_CLASS_NAME
} from '@/src/shared/constants/prediction-class.const';
import t from '@/src/shared/i18n/i18n';

type FruitSelectionModalProps = {
    visible: boolean;
    onClose: () => void;
    onSelectFruit: (fruit: string) => void;
};

const FruitSelectionModal = ({
    visible,
    onClose,
    onSelectFruit
}: FruitSelectionModalProps) => {
    const fruits = Object.values(PREDICTION_CLASS);

    return (
        <Modal
            transparent
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>{t('picture.fruit')}</Text>
                    {fruits.map((fruit) => (
                        <TouchableOpacity
                            key={fruit}
                            style={styles.modalButton}
                            onPress={() => onSelectFruit(fruit)}
                        >
                            <Text style={styles.modalButtonText}>
                                {PREDICTION_CLASS_NAME[fruit]}
                            </Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={onClose}
                    >
                        <Text style={styles.modalButtonText}>
                            {t('common.cancel')}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default FruitSelectionModal;
