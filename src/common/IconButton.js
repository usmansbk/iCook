import React from 'react';
import {IconButton} from 'react-native-paper';
import Icon from './Icon';

export default ({size, color, name, onPress}) => {
  return (
    <IconButton
      onPress={onPress}
      icon={({color: c, size: s}) => <Icon size={s} name={name} color={c} />}
    />
  );
};
