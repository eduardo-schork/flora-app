import useIdentificationPageLogic from './identification-page.logic';
import PredictPictureScreen from './predict-picture-screen.ui';
import SelectPictureScreen from './select-picture-screen.ui';

function IdentificationPage({ ...props }) {
    const {
        openImagePicker,
        predictionResponse,
        onPressTryAgain,
        pictureData
    } = useIdentificationPageLogic();

    if (pictureData) {
        return (
            <PredictPictureScreen
                {...props}
                pictureData={pictureData}
                onPressTryAgain={onPressTryAgain}
                predictionResponse={predictionResponse}
            />
        );
    }

    return <SelectPictureScreen openImagePicker={openImagePicker} />;
}

export default IdentificationPage;
