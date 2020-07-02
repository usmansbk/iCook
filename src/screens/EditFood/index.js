import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../common/Header';

export default ({navigation, route}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  const title = route.params && route.params.title;
  return (
    <>
      <Header title={title || 'New'} goBack={_goBack} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});
