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
  disabled: (val = 0.2) => `rgba(4, 23, 42, ${val})`,
};

export const avatarColors = [
  '#8e44ad', //Wisteria
  '#2980b9', // belize hole
  '#27ae60', // nephritis,
  '#2d3436', //dracula orchid
  '#16a085', // green sea
  '#e67e22', // carrot
  '#d35400', // pumpkin
  '#00cec9', // robin's egg blue
];

export const avatarColorsWithOpacity = {
  '#8e44ad': 'rgba(142, 68, 173, 0.3)',
  '#2980b9': 'rgba(41, 128, 185, 0.3)',
  '#27ae60': 'rgba(39, 174, 96, 0.3)',
  '#2d3436': 'rgba(45, 52, 54, 0.3)',
  '#16a085': 'rgba(22, 160, 133, 0.3)',
  '#e67e22': 'rgba(230, 126, 34, 0.3)',
  '#d35400': 'rgba(211, 84, 0, 0.3)',
  '#00cec9': 'rgba(0, 206, 201, 0.3)',
};

export default light;
