export type TFruitPrediction = {
    percentages: Record<string, number>;
    predictValues: Record<string, number>;
    predominantClass: string;
};

export type TPrediction = Record<string, TFruitPrediction>;
