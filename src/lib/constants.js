export const gender = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
  {
    label: 'Non-Binary',
    value: 'others',
  },
];

export const countryCodes = [
  {
    label: '+234',
    value: 234,
  },
];

export const currencySymbols = {
  NGN: '₦',
};

export const currencies = Object.keys(currencySymbols).map((key) => ({
  label: currencySymbols[key],
  value: key,
}));
