export const convertPLNToUSD = (PLN) => {

  const PLNtoUSD = PLN / 3.5;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  if (typeof PLN === 'string' || PLN === undefined) {
    return NaN;
  } else if (PLN <= 0) {
    return '$0.00';
  } else if (typeof PLN !== 'string' && typeof PLN !== 'number') {
    return 'Error';
  } else {
    return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
  }
}