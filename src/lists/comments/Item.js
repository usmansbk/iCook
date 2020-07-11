import React from 'react';
import datefns from 'date-fns/formatDistanceToNow';
import {View, StyleSheet} from 'react-native';
import Avatar from '../../common/Avatar';
import Text from '../../common/Text';
// import Rating from '../../common/Rating';
// import IconButton from '../../common/IconButton';

export default ({id, name, avatar, message, date, onPressAvatar, rating}) => {
  const _onPressAvatar = React.useCallback(() => onPressAvatar(id), [
    id,
    onPressAvatar,
  ]);
  return (
    <View style={styles.container}>
      <Avatar size="h4" name={name} uri={avatar} onPress={_onPressAvatar} />
      <View style={styles.body}>
        <View style={styles.nameLine}>
          <Text numberOfLines={1} style={styles.name}>
            {name}
          </Text>
          <Text size="subtitle">
            {datefns(new Date(date), {addSuffix: true})}
          </Text>
        </View>
        {/* {Boolean(rating) && <Rating rating={rating} small />} */}
        <Text>{message}</Text>
        {/* <View style={styles.actions}>
          <IconButton name="message1" size={16} />
          <IconButton name="ellipsis1" size={16} />
        </View> */}
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
  actions: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
