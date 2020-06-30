import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../common/Header';
import Dishes from '../../lists/dishes';

export default ({navigation}) => {
  const _rightAction = () => null;
  return (
    <View style={styles.container}>
      <Header
        title="Saved Recipes"
        rightIcon="plus"
        rightAction={_rightAction}
      />
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
