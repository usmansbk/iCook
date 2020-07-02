import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Text from '../../common/Text';

export default () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/waiting.png')}
        style={styles.image}
      />
      <Text style={styles.text} size="h1">
        No Activity
      </Text>
      <Text style={styles.text}>
        Notifications about your activity will show up here
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
    height: 250,
    width: 250,
    marginVertical: 20,
  },
  text: {
    textAlign: 'center',
  },
});
