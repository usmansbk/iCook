import React from 'react';
import {Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import Text from './Text';

export default () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/images/facebook.png')}
      />
      <Text style={styles.text}>Continue with Facebook</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 335,
    borderRadius: 5,
    margin: 4,
    marginVertical: 8,
    paddingHorizontal: 4,
    backgroundColor: '#4267b2',
  },
  image: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  text: {
    color: '#fff',
  },
});
