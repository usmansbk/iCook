import React from 'react';
import {View} from 'react-native';
import Header from './Header';

export default () => {
  const name = 'Usman Suleiman';
  return (
    <View>
      <Header name={name} />
    </View>
  );
};
