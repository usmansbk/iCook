import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../common/Button';
import colors from '../../config/colors';
import Swiper from './Swiper';

export default () => {
  return (
    <View style={styles.container}>
      <Swiper />
      <View style={styles.buttons}>
        <Button text="Create an account" />
        <Button style={login} text="Login" />
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
