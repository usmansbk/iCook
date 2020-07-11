import React from 'react';
import {View, StyleSheet} from 'react-native';
import Searchbar from '../../common/Searchbar';
import Search from '../../lists/search';

export default () => {
  return (
    <View style={styles.container}>
      <Searchbar />
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
