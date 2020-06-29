import React from 'react';
import datefns from 'date-fns/formatDistanceToNow';
import {View, StyleSheet} from 'react-native';
import Avatar from '../../common/Avatar';
import Text from '../../common/Text';

export default ({name, avatar, message, date}) => {
  return (
    <View style={styles.container}>
      <Avatar size="h4" name={name} uri={avatar} />
      <View style={styles.body}>
        <Text numberOfLines={1} style={styles.name}>
          {name}
        </Text>
        <Text size="subtitle">
          {datefns(new Date(date), {addSuffix: true})}
        </Text>
        <Text>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
  },
  body: {
    paddingLeft: 8,
  },
});
