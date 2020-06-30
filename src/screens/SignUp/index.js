import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../common/Header';
import Text from '../../common/Text';
import TextInput from '../../common/TextInput';
import CheckBox from '../../common/Checkbox';
import Dropdown from '../../common/Dropdown';
import Button from '../../common/Button';
import PasswordStrength from '../../common/PasswordStrength';
import colors from '../../config/colors';
import {gender, countryCodes} from '../../lib/constants';

export default () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const _toggleVisibility = () => setShowPassword(!showPassword);
  return (
    <>
      <Header goBack={() => null} title="Create an account" />
      <View style={styles.container}>
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
              secure={showPassword}
              required
              label="Password"
              placeholder="Enter your password"
              icon="eye"
              onPressIcon={_toggleVisibility}
            />
          </View>
          <PasswordStrength />
          <View style={styles.row}>
            <CheckBox />
            <Text style={styles.footerText}>
              {'I agree to the '}
              <Text style={styles.actionText}>terms and conditions</Text>
            </Text>
          </View>
          <View style={styles.submit}>
            <Button text="Sign up" />
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
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
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
});
