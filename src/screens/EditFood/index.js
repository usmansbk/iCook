import React from 'react';
import Header from '../../common/Header';
import Food from '../../forms/food';
import colors from '../../config/colors';
import mock from './mock';

export default ({navigation, route}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  const _clearForm = () => null;
  const title = route.params && route.params.title;
  return (
    <>
      <Header
        title={title || 'New'}
        goBack={_goBack}
        rightAction={_clearForm}
        rightIcon="close"
        rightIconColor={colors.veryWeakRed}
      />
      <Food values={mock} />
    </>
  );
};
