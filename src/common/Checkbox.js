import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from './Icon';
import colors, {withOpacity} from '../config/colors';

export default ({
  checked = true,
  onPress = () => null,
  style = {},
  disabled,
  ...rest
}) => {
  const state = {
    backgroundColor: checked ? colors.primary : 'transparent',
  };
  if (disabled) {
    state.backgroundColor = withOpacity.disabled();
    state.borderColor = withOpacity.disabled();
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, state, style]}>
      {checked && <Icon color="white" name="check" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.primary,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
