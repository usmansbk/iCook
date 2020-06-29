const light = {
  primary: '#558ce2',
  secondary: '#1f2430',
  accent: '#9B9B9B',
  disabled: '#d6d9df',
  inactive: '#BCBDC1',
  text: '#1F2430',
  error: '#FF0000',
  darkGrey: '#333333',
  buttonLightGrey: '#ECEBEB',
  buttonDarkGrey: '#939090',
  lineGrey: '#333333',
  goodGreen: '#4AE930',
  weakYellow: '#D3B134',
  veryWeakRed: '#EB5757',
};

export const withOpacity = {
  primary: (val = 0.2) => `rgba(85, 140, 226, ${val})`,
  secondary: (val = 0.2) => `rgba(31, 36, 48, ${val})`,
  accent: (val = 0.2) => `rgba(85, 140, 226, ${val})`,
  gray: (val = 0.7) => `rgba(51, 51, 51, ${val})`,
  error: (val = 0.6) => `rgba(235, 87, 87, ${val})`,
};

export default light;
