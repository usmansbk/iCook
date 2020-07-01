import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Avatar from '../../common/Avatar';
import Text from '../../common/Text';
import Button from '../../common/Button';
import Rating from '../../common/Rating';
import colors from '../../config/colors';
import {formatNumber} from '../../lib/utils';

const Stat = ({label, value, disabled, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.count}
      disabled={disabled}
      onPress={onPress}>
      <Text size="h2" style={styles.countValue}>
        {formatNumber(value)}
      </Text>
      <Text style={styles.countTitle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ({
  id,
  name,
  avatar,
  followersCount,
  followingCount,
  recipeCount,
  me,
  isFollowing,
  rating,
  bio,
  toFollow,
}) => {
  const _toFollowers = () => toFollow({id, screen: 'followers', title: name});
  const _toFollowing = () => toFollow({id, screen: 'following', title: name});

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Avatar size="h1" uri={avatar} name={name} />
          <View style={styles.body}>
            <View style={styles.stats}>
              <Stat
                label="Followers"
                value={followersCount}
                onPress={_toFollowers}
              />
              <Stat
                label="Following"
                value={followingCount}
                onPress={_toFollowing}
              />
            </View>
            {!me && (
              <View>
                <Button text={isFollowing ? 'Unfollow' : 'Follow'} />
              </View>
            )}
          </View>
        </View>
        <Text size="h2" style={styles.name}>
          {name}
        </Text>
        {Boolean(rating) && <Rating rating={rating} />}
        <Text size="h3" style={styles.label}>
          Bio:
        </Text>
        <Text>{bio}</Text>
        <Text size="h3" style={styles.label}>
          Meals ({formatNumber(recipeCount)})
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  body: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  name: {
    fontFamily: 'Poppins-Medium',
  },
  count: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  countValue: {
    fontFamily: 'Poppins-Medium',
  },
  label: {
    color: colors.primary,
    marginTop: 8,
  },
});
