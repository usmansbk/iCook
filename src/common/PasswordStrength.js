import React from 'react';
import {ProgressBar} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import Text from './Text';
import colors from '../config/colors';

export default ({strength = 0}) => {
  let color;
  if (strength >= 0.6) {
    color = colors.goodGreen;
  } else if (strength >= 0.3) {
    color = colors.weakYellow;
  } else {
    color = colors.veryWeakRed;
  }
  return (
    <View style={styles.container}>
      <Text size="subtitle">Password strength</Text>
      <ProgressBar progress={strength} color={color} style={styles.progress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  progress: {
    borderRadius: 5,
  },
});
