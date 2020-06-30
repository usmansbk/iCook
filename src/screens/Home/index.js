import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../common/Header';
import Dishes from '../../lists/dishes';

export default ({navigation}) => {
  // const _toProfile = () => navigation.navigate('profile');
  return (
    <View style={styles.container}>
      <Header title="Recipes" rightIcon="plus" />
      <Dishes navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
