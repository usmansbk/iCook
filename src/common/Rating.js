import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from './Icon';
import colors from '../config/colors';

export default ({rating}) => {
  const stars = [];
  for (let i = 1; i < 6; i++) {
    stars.push(
      <Icon name={i <= rating ? 'star' : 'staro'} color={colors.veryWeakRed} />,
    );
  }
  return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
});
