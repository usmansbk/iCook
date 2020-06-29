import React from 'react';
import {View, StyleSheet} from 'react-native';
import Container from '../../common/Container';
import Button from '../../common/Button';
import colors from '../../config/colors';
import Swiper from './Swiper';

export default () => {
  return (
    <Container>
      <View style={styles.container}>
        <Swiper />
        <View style={styles.buttons}>
          <Button text="Create an account" />
          <Button style={login} text="Login" />
        </View>
      </View>
    </Container>
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
    alignItems: 'center',
  },
  buttons: {
    marginBottom: 100,
  },
});
