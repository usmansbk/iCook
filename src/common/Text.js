import React from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../config/colors';

const sizes = {
  h1: 24,
  h2: 20,
  h3: 18,
  body: 14,
  buttons: 18,
  subtitle: 12,
};

export default ({children, style = {}, size = 'body'}) => {
  const fontSize = {
    fontSize: sizes[size],
  };
  return <Text style={[styles.text, fontSize, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.text,
    fontFamily: 'Poppins-Regular',
    textAlignVertical: 'center',
  },
});
