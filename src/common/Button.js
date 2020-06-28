import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors, {withOpacity} from '../config/colors';

export default ({text = 'Button', disabled = true, onPress}) => {
  const active = disabled ? styles.inactive : styles.active;
  const label = disabled ? styles.inactiveLabel : styles.activeLabel;

  return (
    <TouchableOpacity style={[styles.container, active]} disabled={disabled}>
      <View style={styles.primary}>
        <Text style={[styles.label, label]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 335,
    borderRadius: 5,
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
