import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Text from '../../common/Text';

export default () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/fish.png')}
        style={styles.image}
      />
      <Text size="h1">Your Cart is Empty</Text>
      <Text style={styles.subtitle}>
        Looks like you haven't added anything to your cart yet
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  subtitle: {
    textAlign: 'center',
  },
  image: {
    height: 150,
    width: 150,
    marginVertical: 20,
  },
});
