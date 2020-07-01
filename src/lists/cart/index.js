import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Empty from './Empty';

export default () => {
  return <FlatList style={styles.container} ListEmptyComponent={Empty} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
