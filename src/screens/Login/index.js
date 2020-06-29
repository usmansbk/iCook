import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Container from '../../common/Container';
import TextInput from '../../common/TextInput';
import Text from '../../common/Text';
import Logo from '../../common/Logo';
import Button from '../../common/Button';
import colors from '../../config/colors';

export default () => {
  return (
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
            />
            <TouchableOpacity>
              <Text>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <Button style={button} text="Log in" />
          </View>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    marginVertical: 12,
  },
  button: {
    marginVertical: 40,
  }
});

const button = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonDarkGrey,
  },
});
