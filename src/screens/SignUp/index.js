import React from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Header from '../../common/Header';
import Text from '../../common/Text';
import TextInput from '../../common/TextInput';
import CheckBox from '../../common/Checkbox';
import Dropdown from '../../common/Dropdown';
import Button from '../../common/Button';
import PasswordStrength from '../../common/PasswordStrength';
import colors from '../../config/colors';
import {gender, countryCodes} from '../../lib/constants';

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  const _toLogin = React.useCallback(() => navigation.navigate('login'), [
    navigation,
  ]);
  const _onSubmit = React.useCallback(() => {
    navigation.navigate('home');
  }, [navigation]);
  return (
    <>
      <Header goBack={_goBack} title="Create an account" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View>
          <View style={styles.field}>
            <TextInput required label="Name" placeholder="Enter your name" />
          </View>
          <View style={styles.field}>
            <TextInput
              required
              label="Email"
              placeholder="Enter your email address"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.field}>
            <TextInput
              required
              label="Phone number"
              items={countryCodes}
              dropdownPlaceholder="Telephone Prefix"
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.field}>
            <Dropdown
              required
              label="Gender"
              placeholder="Select gender"
              items={gender}
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
          <PasswordStrength />
          <View style={styles.row}>
            <CheckBox style={styles.checkbox} />
            <Text style={styles.footerText}>
              {'I agree to the '}
              <Text style={styles.actionText}>terms and conditions</Text>
            </Text>
          </View>
          <View style={styles.submit}>
            <Button text="Sign up" onPress={_onSubmit} />
          </View>
          <View style={styles.footer}>
            <TouchableOpacity onPress={_toLogin}>
              <Text style={styles.footerText}>
                {'Already have an account?'}{' '}
                <Text style={styles.actionText}>Sign in</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  contentContainer: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  field: {
    marginVertical: 8,
  },
  footer: {
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: colors.accent,
  },
  actionText: {
    color: colors.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  submit: {
    marginTop: 28,
  },
  checkbox: {
    marginRight: 10,
  },
});
