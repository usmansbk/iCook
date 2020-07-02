import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import colors, {withOpacity} from '../config/colors';
import Text from './Text';

export default ({
  style = {},
  customStyle = {},
  text = 'Button',
  disabled,
  onPress = () => null,
}) => {
  const active = disabled ? styles.inactive : style.button || styles.active;
  const label = disabled ? styles.inactiveLabel : styles.activeLabel;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, active, customStyle, style.container]}
      disabled={disabled}>
      <View style={styles.primary}>
        <Text style={[label, style.label]} size="body">
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginVertical: 8,
    height: 40,
  },
  primary: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  active: {
    backgroundColor: colors.primary,
  },
  inactive: {
    backgroundColor: colors.disabled,
  },
  activeLabel: {
    color: '#fff',
  },
  inactiveLabel: {
    color: withOpacity.secondary(0.7),
  },
});
