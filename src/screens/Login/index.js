import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Container from '../../common/Container';
import TextInput from '../../common/TextInput';
import Text from '../../common/Text';
import Logo from '../../common/Logo';
import Button from '../../common/Button';
import GoogleButton from '../../common/GoogleButton';
import FacebookButton from '../../common/FacebookButton';
import Header from '../../common/Header';
import Or from '../../common/Or';
import colors from '../../config/colors';

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  const _toSignup = React.useCallback(() => navigation.navigate('signup'), [
    navigation,
  ]);
  const _rememberPassword = React.useCallback(
    () => navigation.navigate('forgotPassword'),
    [navigation],
  );
  const _onSubmit = React.useCallback(() => {
    navigation.navigate('home');
  }, [navigation]);

  return (
    <>
      <Header goBack={_goBack} title="Login" />
      <Container>
        <View style={styles.container}>
          <Logo />
          <View>
            <View style={styles.input}>
              <TextInput
                label="Email Address"
                placeholder="Enter your email address"
              />
            </View>
            <View style={styles.input}>
              <TextInput
                label="Password"
                placeholder="Enter your password"
                icon="eye"
                secure
              />
              <TouchableOpacity onPress={_rememberPassword} style={styles.nav}>
                <Text style={styles.actionText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <Button onPress={_onSubmit} style={button} text="Log in" />
            </View>
            <Or />
            <View style={styles.footer}>
              <GoogleButton />
              <FacebookButton />
              <TouchableOpacity style={styles.nav} onPress={_toSignup}>
                <Text style={styles.footerText}>
                  {"Don't have an account?"}{' '}
                  <Text style={styles.actionText}>Sign Up</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center',
  },
  input: {
    marginVertical: 12,
  },
  button: {
    marginTop: 18,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: colors.buttonDarkGrey,
  },
  actionText: {
    color: colors.primary,
  },
  nav: {
    paddingTop: 10,
  },
});

const button = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonDarkGrey,
  },
});
