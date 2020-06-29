import React from 'react';
import {IconButton} from 'react-native-paper';
import Icon from './Icon';

export default ({size, color, name}) => {
  return (
    <IconButton
      icon={({color, size}) => <Icon size={size} name={name} color={color} />}
    />
  );
};
