export const PREDICTION_CLASS = {
    PEACH: 'peach',
    POMEGRANATE: 'pomegranate',
    STRAWBERRY: 'strawberry'
} as const;

export type TPredictionClass =
    (typeof PREDICTION_CLASS)[keyof typeof PREDICTION_CLASS];

export const PREDICTION_CLASS_NAME: Record<string, string> = {
    [PREDICTION_CLASS.PEACH]: 'Pêssego',
    [PREDICTION_CLASS.POMEGRANATE]: 'Romã',
    [PREDICTION_CLASS.STRAWBERRY]: 'Morango'
};

export type TPredictionClassName =
    (typeof PREDICTION_CLASS_NAME)[keyof typeof PREDICTION_CLASS_NAME];
