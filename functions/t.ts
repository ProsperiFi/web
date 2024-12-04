import enGB from '@/public/locales/en-GB/common.json'

interface TranslationJson {
    [key: string]: string;
}

export const t = (keyname: string) => {
    const translations: TranslationJson = enGB;

    if (!translations[keyname]) { return keyname }
    return translations[keyname]
}

export default t