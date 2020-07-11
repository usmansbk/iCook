import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
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
import Settings from './screens/Settings';
import NotificationSettings from './screens/NotificationSettings';
import ChangePassword from './screens/ChangePassword';
import ChangeEmail from './screens/Email';
import Gender from './screens/Gender';
import Country from './screens/Country';
import LoginOptions from './screens/LoginOptions';
import Comments from './screens/Comments';
import Notifications from './screens/Notifications';
import Search from './screens/Search';
import {Followers, Following} from './screens/Follow';
import EditFood from './screens/EditFood';

import Icon from './common/Icon';
import Header from './common/Header';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const FollowTab = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="followers" component={Followers} />
      <TopTab.Screen name="following" component={Following} />
    </TopTab.Navigator>
  );
};

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
          } else if (route.name === 'Search') {
            iconName = 'search1';
          } else if (route.name === 'editfood') {
            iconName = 'pluscircle' + (focused ? '' : 'o');
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="editfood" component={EditFood} />
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
          <Stack.Screen name="settings" component={Settings} />
          <Stack.Screen name="changepassword" component={ChangePassword} />
          <Stack.Screen name="changeemail" component={ChangeEmail} />
          <Stack.Screen name="changegender" component={Gender} />
          <Stack.Screen name="changeregion" component={Country} />
          <Stack.Screen name="loginoptions" component={LoginOptions} />
          <Stack.Screen name="comments" component={Comments} />
          <Stack.Screen
            options={({navigation, route}) => ({
              headerShown: true,
              header: () => (
                <Header
                  goBack={() => {
                    navigation.goBack();
                  }}
                  title={route.params.title || 'Profile'}
                />
              ),
            })}
            name="follow"
            component={FollowTab}
          />
          <Stack.Screen
            name="notificationsettings"
            component={NotificationSettings}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
