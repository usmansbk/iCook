import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import Text from '../../common/Text';

export default ({message}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/fish.png')}
        style={styles.image}
      />
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  image: {
    height: 150,
    width: 150,
    marginVertical: 20,
  },
});
