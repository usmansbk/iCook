import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import Avatar from '../../common/Avatar';
import Text from '../../common/Text';
import Icon from '../../common/Icon';

export default class Item extends React.Component {
  render() {
    const {
      authorName,
      authorAvatar,
      name,
      image,
      likes,
      commentsCount,
      date,
      description,
    } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Avatar uri={authorAvatar} name={authorAvatar} size="h3" />
          <Text>{authorName}</Text>
          <Text>{date}</Text>
        </View>
        <View>
          <Image source={{uri: image}} style={styles.image} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 472,
    width: 345,
  },
});
