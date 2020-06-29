import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../common/Header';
import Recipe from '../../lists/recipe';

export default () => {
  return (
    <View style={styles.container}>
      <Header goBack={() => null} title="Recipe" />
      <Recipe />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
