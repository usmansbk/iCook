import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from './Icon';
import colors from '../config/colors';

export default ({
  disabled = false,
  error = false,
  onBlur = () => null,
  onFocus = () => null,
  ...rest
}) => {
  const [focused, setFocus] = React.useState(false);
  const _setFocus = () => {
    setFocus(true);
    onFocus();
  };
  const _setBlur = () => {
    setFocus(false);
    onBlur();
  };

  const focusState = focused ? styles.active : styles.inactive;

  const disabledState = disabled ? styles.inactive : {};
  const errorState = error ? styles.error : {};
  const inputState = disabled
    ? styles.textInputInactive
    : styles.textInputActive;
  const textError = error ? styles.textError : {};

  return (
    <View style={[styles.border, focusState, disabledState, errorState]}>
      <TextInput
        editable={!disabled}
        placeholder="Sample field"
        style={[styles.textInput, inputState, textError]}
        underlineColorAndroid="transparent"
        autoCorrect={false}
        onFocus={_setFocus}
        onBlur={_setBlur}
        {...rest}
      />
      <Icon size={22} />
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderRadius: 3,
    width: 335,
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textInput: {
    height: 40,
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlignVertical: 'center',
    padding: 0,
    margin: 0,
  },
  active: {
    borderColor: '#558CE2',
  },
  inactive: {
    borderColor: colors.inactive,
  },
  textInputInactive: {
    color: colors.inactive,
  },
  error: {
    borderColor: colors.error,
  },
  textError: {
    color: colors.error,
  },
});
