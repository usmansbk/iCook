import React from 'react';
import datefns from 'date-fns/formatDistanceToNow';
import {View, StyleSheet} from 'react-native';
import Avatar from '../../common/Avatar';
import Text from '../../common/Text';
import Rating from '../../common/Rating';

export default ({name, avatar, message, date, onPressAvatar, rating}) => {
  return (
    <View style={styles.container}>
      <Avatar size="h4" name={name} uri={avatar} onPress={onPressAvatar} />
      <View style={styles.body}>
        <View style={styles.nameLine}>
          <Text numberOfLines={1} style={styles.name}>
            {name}
          </Text>
          <Text size="subtitle">
            {datefns(new Date(date), {addSuffix: true})}
          </Text>
        </View>
        {Boolean(rating) && <Rating rating={rating} small />}
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
    flex: 1,
    fontFamily: 'Poppins-SemiBold',
  },
  body: {
    paddingLeft: 8,
    flex: 1,
  },
  nameLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
