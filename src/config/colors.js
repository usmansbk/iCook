const light = {
  primary: '#558ce2',
  secondary: '#1f2430',
  accent: '#9B9B9B',
  disabled: '#d6d9df',
};

export const withOpacity = {
  primary: (val = 0.2) => `rgba(85, 140, 226, ${val})`,
  secondary: (val = 0.2) => `rgba(31, 36, 48, ${val})`,
  accent: (val = 0.2) => `rgba(85, 140, 226, ${val})`,
};

export default light;
