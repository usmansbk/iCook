import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../common/Header';
import Text from '../../common/Text';
import TextInput from '../../common/TextInput';
import Button from '../../common/Button';
import Avatar from '../../common/Avatar';
import CheckBox from '../../common/Checkbox';
import Icon from '../../common/Icon';
import colors from '../../config/colors';
import {countryCodes} from '../../lib/constants';

export default ({navigation}) => {
  const goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  const [mount, setMount] = React.useState(false);
  React.useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }
  const {name = 'Usman', avatar, address, bio = '', showNumber = true} = {};
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
            required
            label="Phone number"
            items={countryCodes}
            dropdownPlaceholder="Telephone Prefix"
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.row}>
          <CheckBox checked={showNumber} style={styles.checkbox} />
          <Text style={styles.footerText}>Show number in profile</Text>
        </View>
        <View style={styles.field}>
          <TextInput
            label="Address"
            value={address}
            multiline
            placeholder="Restaurant / Home full address"
          />
        </View>
        <View style={styles.field}>
          <TextInput
            label="Bio"
            value={bio}
            multiline
            placeholder="About you or your business"
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
  row: {
    flexDirection: 'row',
    paddingBottom: 12,
  },
  footerText: {
    marginLeft: 8,
  },
});
