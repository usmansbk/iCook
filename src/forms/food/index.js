import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../common/Text';

export default () => {
  return (
    <View style={styles.container}>
      <Text>Title</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
});
