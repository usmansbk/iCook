import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Text from '../../common/Text';

export default () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require('../../assets/images/search.png')}
        style={styles.image}
      />
      <Text size="h1">Discover</Text>
      <Text style={styles.subtitle}>See popular food near you</Text>
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
    height: 250,
    width: 250,
    marginVertical: 20,
  },
});
