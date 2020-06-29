import React from 'react';
import {View, StyleSheet} from 'react-native';
import Avatar from '../../common/Avatar';
import Text from '../../common/Text';
import IconButton from '../../common/IconButton';

export default () => {
  const userName = 'Usman Suleiman';
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar size="h3" name={userName} />
      </View>
      <View style={styles.greetings}>
        <Text>Good morning,</Text>
        <Text style={styles.name}>Usman Suleiman</Text>
      </View>
      <View style={styles.right}>
        <IconButton onPress={() => null} name="bells" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    paddingRight: 8,
  },
  right: {
    alignSelf: 'flex-end',
  },
  name: {
    fontFamily: 'Poppins-Bold',
  },
  greetings: {
    flex: 1,
  },
});
