const asCurrency = (amount: number, currency: string = "USD"): string => {
	let locale = 'en-US'

  switch(currency) {
    case 'gbp':
      locale = 'en-GB';
      break;
    default:
      break;
  }
  
  const formatter = new Intl.NumberFormat(locale, {
		style: 'currency',
		currency: currency,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
	return formatter.format(amount);
}

export default asCurrency
