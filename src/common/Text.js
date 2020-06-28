import React from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../config/colors';

export default ({children, style = []}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.text,
    fontFamily: 'Poppins-Regular',
  },
});
