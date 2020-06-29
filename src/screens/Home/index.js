import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './Header';
import Dishes from '../../lists/dishes';

export default () => {
  const name = 'Usman Suleiman';
  return (
    <View style={styles.container}>
      <Header name={name} />
      <Dishes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
