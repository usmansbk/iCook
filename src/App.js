import React from 'react';
import {StatusBar} from 'react-native';
import Welcome from './screens/Welcome';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import Favorites from './screens/Favorites';
import DishDetails from './screens/DishDetails';
import Profile from './screens/Profile';
import Account from './screens/Account';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Account />
    </>
  );
};
