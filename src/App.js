import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="onboarding" component={Onboarding} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="forgotPassword" component={ForgotPassword} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="favorites" component={Favorites} />
          <Stack.Screen name="details" component={DishDetails} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="account" component={Account} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
