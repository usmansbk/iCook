import React from 'react';
import {IconButton} from 'react-native-paper';
import Icon from './Icon';

export default ({size, color, name, onPress = () => null}) => {
  return (
    <IconButton
      onPress={onPress}
      color={color}
      size={size}
      icon={({color: c, size: s}) => <Icon size={s} name={name} color={c} />}
    />
  );
};
