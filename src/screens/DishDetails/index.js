import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../common/Header';
import Recipe from '../../lists/recipe';
import mock from './mock';

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  return (
    <View style={styles.container}>
      <Header goBack={_goBack} title="Recipe" />
      <Recipe data={mock} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
