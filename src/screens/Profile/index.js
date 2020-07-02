import React from 'react';
import Profile from '../../lists/profile';
import Header from '../../common/Header';
import mock from './mock';

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);

  const user = {
    name: 'Ester Howard',
    avatar: 'https://i.pravatar.cc/300',
    followersCount: 4400,
    followingCount: 2200,
    recipeCount: 13,
    me: true,
    isFollowing: false,
    rating: 4,
    bio: 'I love to cook, its just a part of me',
    address: 'NWRI',
  };
  return (
    <>
      <Header goBack={_goBack} title="Profile" />
      <Profile navigation={navigation} items={mock} user={user} />
    </>
  );
};
