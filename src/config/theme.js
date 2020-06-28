import {DefaultTheme, configureFonts} from 'react-native-paper';
import colors from './colors';
import fonts from './fonts';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
  fonts: configureFonts(fonts),
};

export default theme;
