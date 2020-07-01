import React from 'react';
import {View, StyleSheet} from 'react-native';
import Dishes from '../../lists/dishes';
import Searchbar from '../../common/Searchbar';
import mock from './mock';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Searchbar />
      <Dishes navigation={navigation} items={mock} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
