import React from 'react';
import {StyleSheet} from 'react-native';
import Text from './Text';
import {currencySymbols} from '../lib/constants';
import {formatCurrency} from '../lib/utils';

export default ({currency, price}) => {
  const sign = currencySymbols[currency];
  return (
    <Text style={styles.text} size="h1">
      {sign}
      {formatCurrency(price)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Bold',
  },
});
