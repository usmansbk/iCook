import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import numeral from 'numeral';
import Avatar from '../../common/Avatar';
import Header from '../../common/Header';
import Text from '../../common/Text';
import Button from '../../common/Button';
import colors from '../../config/colors';

const Stat = ({label, value, disabled, onPress}) => {
  const format = value > 1000 ? '0.0a' : '0a';
  return (
    <TouchableOpacity
      style={styles.count}
      disabled={disabled}
      onPress={onPress}>
      <Text size="h2" style={styles.countValue}>
        {numeral(value).format(format)}
      </Text>
      <Text style={styles.countTitle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ({
  name = 'Ester Howard',
  avatar = 'https://i.pravatar.cc/300',
  followersCount = 4400,
  followingCount = 2200,
  recipeCount = 13,
  me = true,
  isFollowing,
  bio = 'I love to cook, its just a part of me',
}) => {
  return (
    <View style={styles.container}>
      <Header goBack={() => null} title="Profile" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Avatar size="h1" uri={avatar} name={name} />
          <View style={styles.body}>
            <View style={styles.stats}>
              <Stat label="Followers" value={followersCount} />
              <Stat label="Following" value={followingCount} />
              <Stat label="Recipes" value={recipeCount} />
            </View>
            <View>
              <Button text={me ? 'Edit information' : 'Follow'} />
            </View>
          </View>
        </View>
        <Text size="h2" style={styles.name}>
          {name}
        </Text>
        <Text size="h3" style={styles.label}>
          Bio:
        </Text>
        <Text>{bio}</Text>
        <Text size="h3" style={styles.label}>
          Dishes
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
