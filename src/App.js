import React from 'react';
import {StatusBar} from 'react-native';
import Welcome from './screens/Welcome';

export default () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Welcome />
    </>
  );
};
