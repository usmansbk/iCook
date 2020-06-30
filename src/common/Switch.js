import React from 'react';
import {Switch} from 'react-native-paper';

export default ({value, onPress}) => {
  return <Switch value={value} onPress={onPress} />;
};
