import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import Text from '../../common/Text';

export default ({message, subtitle}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/fish.png')}
        style={styles.image}
      />
      <Text style={styles.text} size="h1">
        {message || 'Your List is Empty'}
      </Text>
      <Text style={styles.text}>
        {subtitle || 'Follow a user or create a dish'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    height: 150,
    width: 150,
    marginVertical: 20,
  },
  text: {
    textAlign: 'center',
  },
});
