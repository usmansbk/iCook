import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from './Icon';
import Text from './Text';
import Dropdown from './Dropdown';
import colors, {withOpacity} from '../config/colors';
import {countryCodes} from '../lib/constants';

export default ({
  secure,
  required,
  value = '',
  label,
  items,
  placeholder,
  errorMessage,
  helperText,
  disabled = false,
  error = false,
  icon,
  iconSize = 20,
  dropdownPlaceholder,
  onBlur = () => null,
  onFocus = () => null,
  onChangeText = () => null,
  onPressIcon = () => null,
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

  const focusState = focused ? styles.active : {};

  const emptyState = value ? {} : styles.empty;
  const disabledState = disabled ? styles.disabled : {};
  const errorState = error ? styles.error : {};
  const inputState = disabled
    ? styles.textInputInactive
    : styles.textInputActive;
  const textError = error ? styles.textError : {};

  return (
    <View>
      {Boolean(label) && (
        <Text>
          {label}{' '}
          {Boolean(required && !value) && (
            <Icon size={14} name="exclamationcircle" />
          )}
        </Text>
      )}
      <View
        style={[
          styles.border,
          disabledState,
          errorState,
          emptyState,
          focusState,
        ]}>
        {Boolean(items) && (
          <View style={styles.dropdown}>
            <Dropdown
              placeholder={dropdownPlaceholder}
              noStyle
              value={234}
              items={countryCodes}
            />
          </View>
        )}
        <TextInput
          value={value}
          editable={!disabled}
          placeholder={placeholder}
          style={[styles.textInput, inputState, textError]}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          onFocus={_setFocus}
          onChangeText={onChangeText}
          secureTextEntry={secure}
          onBlur={_setBlur}
          {...rest}
        />
        {Boolean(icon) && (
          <Icon
            onPress={onPressIcon}
            size={iconSize}
            color={focused ? colors.primary : undefined}
            name={icon}
          />
        )}
      </View>
      {Boolean(errorMessage) && (
        <Text style={styles.textError}>{errorMessage}</Text>
      )}
      {Boolean(helperText && !errorMessage) && (
        <Text style={styles.helperText}>{helperText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
  },
  dropdown: {
    width: 80,
  },
  border: {
    borderWidth: 1,
    borderRadius: 3,
    width: 335,
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
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
  disabled: {
    borderColor: colors.inactive,
    backgroundColor: withOpacity.gray(0.05),
  },
  empty: {
    borderColor: withOpacity.gray(0.05),
    backgroundColor: withOpacity.gray(0.05),
  },
  textInputInactive: {
    color: colors.inactive,
  },
  error: {
    borderColor: colors.error,
  },
  textError: {
    color: withOpacity.error(0.6),
  },
  helperText: {
    color: withOpacity.primary(0.6),
  },
});
