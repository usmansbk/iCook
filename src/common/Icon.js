import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';

export default ({size = 16, color = colors.accent, name = 'key'}) => {
  return <Icon size={size} color={color} name={name} />;
};
