import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../common/Header';
import Dishes from '../../lists/dishes';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Saved" />
      <Dishes navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
