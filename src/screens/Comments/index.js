import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../common/Header';
import Comments from '../../lists/comments';
import CommentInput from '../../forms/comment';
import data from './mock';

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  return (
    <>
      <Header goBack={_goBack} title="Comments" />
      <Comments data={data} navigation={navigation} />
      <View style={styles.input}>
        <CommentInput />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});
