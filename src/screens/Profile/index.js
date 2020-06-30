import React from 'react';
import Profile from '../../lists/profile';
import Header from '../../common/Header';

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  return (
    <>
      <Header goBack={_goBack} title="Profile" />
      <Profile navigation={navigation} />
    </>
  );
};
