import React from 'react';
import {StatusBar} from 'react-native';
import Welcome from './screens/Welcome';
import Onboarding from './screens/Onboarding';

export default () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Onboarding />
    </>
  );
};
