import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../common/Button';
import colors from '../../config/colors';
import Swiper from './Swiper';

export default ({navigation}) => {
  const _toSignup = React.useCallback(() => navigation.navigate('signup'), [
    navigation,
  ]);
  const _toLogin = React.useCallback(() => navigation.navigate('login'), [
    navigation,
  ]);
  const _toHome = React.useCallback(() => navigation.navigate('home'), [
    navigation,
  ]);

  return (
    <View style={styles.container}>
      <Swiper />
      <View style={styles.buttons}>
        <Button onPress={_toSignup} text="Create an account" />
        <Button onPress={_toLogin} style={login} text="Login" />
        <Button onPress={_toHome} style={login} text="Guest" />
      </View>
    </View>
  );
};

const login = StyleSheet.create({
  label: {
    color: colors.darkGrey,
  },
  button: {
    backgroundColor: colors.buttonLightGrey,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  buttons: {
    marginBottom: 100,
  },
});
