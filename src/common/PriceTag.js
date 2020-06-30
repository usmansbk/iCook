import React from 'react';
import {StyleSheet} from 'react-native';
import numeral from 'numeral';
import Text from './Text';
import {currencySymbols} from '../lib/constants';

export default ({currency, price}) => {
  const sign = currencySymbols[currency];
  return (
    <Text style={styles.text} size="h1">
      {sign}
      {numeral(price).format('0,0[.]00')}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Bold',
  },
});
