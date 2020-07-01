import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../common/Header';
import Recipe from '../../lists/recipe';
import mock, {comments} from './mock';

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  const _rightAction = () => null;
  const {me = true} = {};
  return (
    <View style={styles.container}>
      <Header
        goBack={_goBack}
        title={mock.title}
        rightIcon={me ? 'ellipsis1' : undefined}
        rightAction={_rightAction}
      />
      <Recipe data={mock} comments={comments} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
