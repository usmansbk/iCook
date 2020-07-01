import React from 'react';
import People from '../../lists/people';
import mock from './mock';

export default ({navigation}) => {
  return <People items={mock} navigation={navigation} />;
};
