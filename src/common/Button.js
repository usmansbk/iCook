import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import colors, {withOpacity} from '../config/colors';
import Text from './Text';

export default ({
  style = {},
  text = 'Button',
  disabled,
  onPress = () => null,
}) => {
  const active = disabled ? styles.inactive : style.button || styles.active;
  const label = disabled ? styles.inactiveLabel : styles.activeLabel;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, active]}
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
    flexDirection: 'row',
    width: 335,
    borderRadius: 5,
    margin: 4,
    marginVertical: 8,
  },
  primary: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
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
