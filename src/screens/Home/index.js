import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './Header';
import Dishes from '../../lists/dishes';

export default ({navigation}) => {
  const name = 'Usman Suleiman';
  const _toProfile = () => navigation.navigate('profile');
  return (
    <View style={styles.container}>
      <Header name={name} onPress={_toProfile} />
      <Dishes navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
