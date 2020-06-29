import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';
import colors from '../config/colors';

export default ({number = 0, last}) => {
  return (
    <View style={styles.container}>
      <Text adjustsFontSizeToFit style={styles.number}>
        {number}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    color: 'white',
    fontSize: 11,
  },
});
