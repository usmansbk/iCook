import React from 'react';
import Header from '../../common/Header';

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  return (
    <>
      <Header goBack={_goBack} title="Comments" />
    </>
  );
};
