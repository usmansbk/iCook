import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../../common/Text';
import Avatar from '../../common/Avatar';
import Button from '../../common/Button';
import {formatNumber} from '../../lib/utils';

export default ({
  id,
  name,
  followersCount,
  avatar,
  me,
  isFollowing,
  onPress = () => null,
}) => {
  const _toProfile = React.useCallback(() => onPress(id), [id, onPress]);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={_toProfile} style={styles.left}>
        <Avatar size="h3" name={name} uri={avatar} />
        <View style={styles.body}>
          <Text numberOfLines={1} style={styles.name}>{name}</Text>
          <Text size="subtitle">{formatNumber(followersCount)} Followers</Text>
        </View>
      </TouchableOpacity>
      {!me && <Button text={isFollowing ? 'Unfollow' : 'Follow'} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 10,
  },
  name: {
    fontFamily: 'Poppins-Bold',
    flex: 1,
  },
});
