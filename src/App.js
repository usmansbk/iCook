import React from 'react';
import {StatusBar} from 'react-native';
import Welcome from './screens/Welcome';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import SignUp from './screens/SignUp';

export default () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SignUp />
    </>
  );
};
