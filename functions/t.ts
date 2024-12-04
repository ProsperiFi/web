import enGB from '@/public/locales/en-GB/common.json'

interface TranslationJson {
    [key: string]: string;
}

export const t = (keyname: string) => {
    const translations: TranslationJson = enGB;

    console.log('translations', translations)
    console.log('translations keyname', translations[keyname])

    if (!translations[keyname]) { return keyname }
    return translations[keyname]
}

export default t