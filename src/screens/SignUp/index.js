import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Container from '../../common/Container';
import Header from '../../common/Header';
import Text from '../../common/Text';
import TextInput from '../../common/TextInput';
import CheckBox from '../../common/Checkbox';
import Button from '../../common/Button';
import colors from '../../config/colors';

export default () => {
  return (
    <>
      <Header goBack={() => null} title="Create an account" />
      <Container>
        <View>
          <View style={styles.field}>
            <TextInput required label="Name" placeholder="Enter your name" />
          </View>
          <View style={styles.field}>
            <TextInput required label="Gender" placeholder="Select gender" />
          </View>
          <View style={styles.field}>
            <TextInput
              required
              label="Phone number"
              placeholder="Enter your phone number"
            />
          </View>
          <View style={styles.field}>
            <TextInput
              secure
              required
              label="Password"
              placeholder="Enter your password"
              icon="eye"
            />
          </View>
          <View style={styles.field}>
            <Button text="Sign up" disabled />
          </View>
          <View style={styles.footer}>
            <TouchableOpacity>
              <Text style={styles.footerText}>
                {'Already have an account?'}{' '}
                <Text style={styles.actionText}>Sign in</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  field: {
    marginVertical: 8,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: colors.accent,
  },
  actionText: {
    color: colors.primary,
  },
});
