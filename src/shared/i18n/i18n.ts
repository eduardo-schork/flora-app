import ptBrJson from './pt-br.json';

const i18nRepository = ptBrJson;

type Ti18nKeys = keyof typeof i18nRepository;

function t(
    path: Ti18nKeys,
    ...params: (string | number | undefined)[]
): string {
    const resolvedText = i18nRepository[path];

    if (resolvedText) {
        return params.reduce(
            (acc, param, index) => acc.replace(`$${index + 1}`, String(param)),
            resolvedText
        );
    }

    return '';
}

export default t;
