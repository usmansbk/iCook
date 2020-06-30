import React from 'react';
import {View, StyleSheet} from 'react-native';
import Avatar from '../../common/Avatar';
import Header from '../../common/Header';
import Text from '../../common/Text';
import Button from '../../common/Button';

export default ({
  name = 'Ester Howard',
  avatar = 'https://i.pravatar.cc/300',
  followersCount = 44000,
  followingCount = 22000,
  me,
  isFollowing,
  bio = 'I love to cook, its just a part of me',
}) => {
  return (
    <View style={styles.container}>
      <Header goBack={() => null} title="Profile" />
      <View>
        <View>
          <Avatar uri={avatar} name={name} />
          <View>
            <View>
              <View>
                <Text>{followersCount}</Text>
                <Text>Followers</Text>
              </View>
              <View>
                <Text>{followingCount}</Text>
                <Text>Followers</Text>
              </View>
            </View>
            <Button text="Follow" />
          </View>
        </View>
        <Text>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
