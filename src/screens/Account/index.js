import React from 'react';
import Account from '../../lists/account';
import Header from '../../common/Header';

export default () => {
  return (
    <>
      <Header goBack={() => null} title="Account" />
      <Account />
    </>
  );
};
