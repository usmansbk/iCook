import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import EditProfile from './screens/EditProfile';
import Icon from './common/Icon';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Likes') {
            iconName = 'heart' + (focused ? '' : 'o');
          } else if (route.name === 'Account') {
            iconName = 'user';
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Likes" component={Favorites} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="onboarding" component={Onboarding} />
          <Stack.Screen name="home" component={HomeTab} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="forgotPassword" component={ForgotPassword} />
          <Stack.Screen name="details" component={DishDetails} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="editprofile" component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
