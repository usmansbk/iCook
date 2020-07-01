import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../../common/Text';
import Avatar from '../../common/Avatar';
import Button from '../../common/Button';
import {formatNumber} from '../../lib/utils';

export default ({id, name, followersCount, avatar, me, isFollowing}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.left}>
        <Avatar size="h3" name={name} uri={avatar} />
        <View style={styles.body}>
          <Text style={styles.name}>{name}</Text>
          <Text size="subtitle">{formatNumber(followersCount)} Followers</Text>
        </View>
      </View>
      {!me && <Button text={isFollowing ? 'Unfollow' : 'Follow'} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  left: {
    flexDirection: 'row',
  },
  body: {
    paddingHorizontal: 10,
  },
  name: {
    fontFamily: 'Poppins-Bold',
  },
});
