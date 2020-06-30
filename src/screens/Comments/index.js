import React from 'react';
import Header from '../../common/Header';
import Comments from '../../lists/comments';
import data from './mock';

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  return (
    <>
      <Header goBack={_goBack} title="Comments" />
      <Comments data={data} />
    </>
  );
};
