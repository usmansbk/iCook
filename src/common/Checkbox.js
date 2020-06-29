import React from 'react';
import {Checkbox} from 'react-native-paper';
import colors from '../config/colors';

export default ({checked = true, onPress = () => null, ...rest}) => {
  return (
    <Checkbox
      color={colors.primary}
      status={checked ? 'checked' : 'unchecked'}
      onPress={onPress}
      {...rest}
    />
  );
};
