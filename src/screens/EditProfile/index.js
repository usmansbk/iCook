import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../common/Header';
import TextInput from '../../common/TextInput';
import Button from '../../common/Button';
import Avatar from '../../common/Avatar';
import Icon from '../../common/Icon';
import colors from '../../config/colors';

export default ({navigation}) => {
  const goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  const {
    name = 'Usman Suleiman',
    avatar,
    bio = 'What is life without foodlife without foodlife without foodlife without foodlife without foodlife without foodlife without foodlife without food',
  } = {};
  return (
    <>
      <Header title="Edit profile" goBack={goBack} />
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Avatar
            name={name}
            uri={avatar}
            size="h1"
            picker
            onPress={() => null}
          />
          <View style={styles.picker}>
            <Icon name="camera" color={colors.inactive} size={24} />
          </View>
        </View>
        <View style={styles.field}>
          <TextInput label="Name" value={name} />
        </View>
        <View style={styles.field}>
          <TextInput label="Bio" value={bio} multiline />
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
  },
});