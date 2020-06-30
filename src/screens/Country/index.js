import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../common/Header';

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  return (
    <View style={styles.container}>
      <Header title="Country/Region" goBack={_goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
