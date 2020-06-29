import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../config/colors';

export default ({size = 16, color = colors.text, name = 'key'}) => {
  return <Icon size={size} color={color} name={name} />;
};
