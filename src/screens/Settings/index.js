import React from 'react';
import Header from '../../common/Header';
import Settings from '../../lists/Settings';

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  return (
    <>
      <Header goBack={_goBack} title="Settings" />
      <Settings navigation={navigation} />
    </>
  );
};
