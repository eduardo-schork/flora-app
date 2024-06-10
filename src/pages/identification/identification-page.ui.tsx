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
        onChangeSelectedModel,
        saveFruitSelection,
        postImage
    } = useIdentificationPageLogic();

    if (pictureData) {
        return (
            <PredictPictureScreen
                {...props}
                selectedModel={selectedModel}
                pictureData={pictureData}
                onPressTryAgain={onPressTryAgain}
                predictionResponse={predictionResponse}
                postImage={postImage}
                saveFruitSelection={saveFruitSelection}
            />
        );
    }

    return (
        <SelectPictureScreen
            selectedModel={selectedModel}
            openImagePicker={openImagePicker}
            onChangeSelectedModel={onChangeSelectedModel}
        />
    );
}

export default IdentificationPage;
