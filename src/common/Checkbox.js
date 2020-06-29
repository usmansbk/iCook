import React from 'react';
import {Checkbox} from 'react-native-paper';
import colors from '../config/colors';

export default ({checked = true, ...rest}) => {
  return (
    <Checkbox
      color={colors.primary}
      status={checked ? 'checked' : 'unchecked'}
      {...rest}
    />
  );
};
