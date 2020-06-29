import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../common/Header';
import Dishes from '../../lists/dishes';

export default () => {
  return (
    <View style={styles.container}>
      <Header title="Favourites" />
      <Dishes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
