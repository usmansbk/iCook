import React from 'react';
import {View, StyleSheet} from 'react-native';
import numeral from 'numeral';
import Avatar from '../../common/Avatar';
import Header from '../../common/Header';
import Text from '../../common/Text';
import Button from '../../common/Button';

export default ({
  name = 'Ester Howard',
  avatar = 'https://i.pravatar.cc/300',
  followersCount = 4400,
  followingCount = 2200,
  me,
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
              <View style={styles.count}>
                <Text size="h2" style={styles.countValue}>
                  {numeral(followersCount).format('0.0a')}
                </Text>
                <Text style={styles.countTitle}>Followers</Text>
              </View>
              <View style={styles.count}>
                <Text size="h2" style={styles.countValue}>
                  {numeral(followingCount).format('0.0a')}
                </Text>
                <Text style={styles.countTitle}>Followers</Text>
              </View>
            </View>
            <View>
              <Button text="Follow" />
            </View>
          </View>
        </View>
        <Text size="h2" style={styles.name}>
          {name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
