import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../common/Header';
import Dishes from '../../lists/dishes';
import mock from './mock';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Saved" />
      <Dishes
        navigation={navigation}
        items={mock}
        emptyTitle="You haven't saved any dish yet"
        emptySubtitle="When you do they will show up here"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
