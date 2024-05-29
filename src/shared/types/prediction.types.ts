export type TFruitPrediction = {
    percentages: Record<string, number>;
    predictValues: Record<string, number>;
    predominantClass: string;
};

export type TPrediction = {
    convnet: TFruitPrediction;
    inceptionv3: TFruitPrediction;
    vgg16: TFruitPrediction;
};
