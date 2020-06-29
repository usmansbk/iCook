import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';
import colors from '../config/colors';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text>OR</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  line: {
    height: StyleSheet.hairlineWidth,
    width: 137,
    backgroundColor: colors.lineGrey,
  },
});
