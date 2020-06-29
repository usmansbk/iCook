import React from 'react';
import {Image} from 'react-native';

export default ({size = 100}) => {
  const style = {
    width: size,
    height: size,
  };

  return (
    <Image
      style={style}
      resizeMode="contain"
      source={require('../assets/images/logo.png')}
    />
  );
};
