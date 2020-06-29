import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../common/Header';

export default () => {
  return (
    <View style={styles.container}>
      <Header goBack={() => null} title="Recipe" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
