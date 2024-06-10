import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

import { styles } from '../identification-page.styles';

import t from '@/src/shared/i18n/i18n';

type FeedbackModalProps = {
    visible: boolean;
    onClose: () => void;
    onPost: () => void;
};

const FeedbackModal = ({ visible, onClose, onPost }: FeedbackModalProps) => {
    return (
        <Modal
            transparent
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>
                        {t('picture.postQuestion')}
                    </Text>
                    <View style={styles.modalButtonContainer}>
                        <TouchableOpacity
                            style={[
                                styles.cancelButton,
                                styles.postButtonCancel
                            ]}
                            onPress={onClose}
                        >
                            <Text style={styles.modalButtonText}>
                                {t('common.cancel')}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.cancelButton, styles.postButton]}
                            onPress={onPost}
                        >
                            <Text style={styles.modalButtonText}>
                                {t('picture.post')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default FeedbackModal;
