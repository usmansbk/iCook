import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';

export default function Item({quantity, unit, of, onPress}) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress} disabled={!onPress}>
      <Text style={styles.qty}>
        {quantity} {unit}
      </Text>
      <Text style={styles.of}>
        {unit ? ' of ' : ' '}
        {of}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginVertical: 8,
  },
  qty: {
    fontFamily: 'Poppins-SemiBold',
  },
  of: {
    fontFamily: 'Poppins-Regular',
  },
});
