import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../common/Header';
import TextInput from '../../common/TextInput';
import Button from '../../common/Button';
import Avatar from '../../common/Avatar';
import Icon from '../../common/Icon';
import colors from '../../config/colors';

export default ({navigation}) => {
  const goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  const {name = 'Usman', avatar, address, bio = ''} = {};
  return (
    <>
      <Header title="Edit profile" goBack={goBack} />
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Avatar name={name} uri={avatar} size="l1" picker />
          <TouchableOpacity onPress={() => null} style={styles.picker}>
            <Icon name="camera" color="white" size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.field}>
          <TextInput label="Name" value={name} placeholder="Enter your name" />
        </View>
        <View style={styles.field}>
          <TextInput
            label="Address"
            value={address}
            multiline
            placeholder="Restaurant full address"
          />
        </View>
        <View style={styles.field}>
          <TextInput
            label="Bio"
            value={bio}
            multiline
            placeholder="About your business"
          />
        </View>
        <Button text="Update profile" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  field: {
    marginVertical: 10,
  },
  avatar: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});
