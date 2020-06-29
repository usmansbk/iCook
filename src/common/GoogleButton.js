import React from 'react';
import {Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import Text from './Text';

export default () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/images/google.png')}
      />
      <Text style={styles.text}>Sign in with Google</Text>
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
    backgroundColor: '#4285F4',
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  text: {
    color: '#fff',
  },
});
