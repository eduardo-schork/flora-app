import useIdentificationPageLogic from './identification-page.logic';
import PredictPictureScreen from './predict-picture-screen.ui';
import SelectPictureScreen from './select-picture-screen.ui';

function IdentificationPage({ ...props }) {
    const {
        pictureData,
        selectedModel,
        openImagePicker,
        onPressTryAgain,
        predictionResponse,
        onChangeSelectedModel
    } = useIdentificationPageLogic();

    if (pictureData) {
        return (
            <PredictPictureScreen
                {...props}
                pictureData={pictureData}
                selectedModel={selectedModel}
                onPressTryAgain={onPressTryAgain}
                predictionResponse={predictionResponse}
            />
        );
    }

    return (
        <SelectPictureScreen
            openImagePicker={openImagePicker}
            onChangeSelectedModel={onChangeSelectedModel}
        />
    );
}

export default IdentificationPage;
