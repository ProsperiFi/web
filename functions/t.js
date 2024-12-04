import enGBcommon from '@/public/locales/en-GB/common.json'
import enGBfinance from '@/public/locales/en-GB/finance.json'

export const t = (keyname, dictionary = "common") => {
  let translations = {}

  switch (dictionary) {
    case "common":
      translations = enGBcommon
      break;
    case "finance":
      translations = enGBfinance
      break;
  }

  if (!translations[keyname]) { return keyname }
  return translations[keyname]
}

export default t
