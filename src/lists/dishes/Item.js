import React from 'react';
import numeral from 'numeral';
import {View, StyleSheet, TouchableNativeFeedback} from 'react-native';
import Avatar from '../../common/Avatar';
import Text from '../../common/Text';
import IconButton from '../../common/IconButton';
import colors from '../../config/colors';
import formatDistance from 'date-fns/formatDistanceToNow';
import Carousel from '../../common/Carousel';

export default class Item extends React.Component {
  _onPress = () => this.props.onPressItem(this.props.id);
  _onPressAvatar = () => this.props.onPressAvatar(this.props.id);
  _onPressComment = () => this.props.onPressComment(this.props.id);

  render() {
    const {
      disabled,
      authorName,
      authorAvatar,
      images = [],
      title,
      likes,
      isLiked,
      isPinned,
      date,
      category,
      description,
      big,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Avatar
              onPress={this._onPressAvatar}
              uri={authorAvatar}
              name={authorAvatar}
              size="h3"
            />
          </View>
          <Text numberOfLines={1} style={styles.name}>
            {authorName}
          </Text>
          <Text style={styles.date}>
            {formatDistance(new Date(date), {addSuffix: true})}
          </Text>
        </View>
        <Carousel imagesUrls={images} />
        <TouchableNativeFeedback disabled={disabled} onPress={this._onPress}>
          <View style={styles.footer}>
            <View style={styles.buttons}>
              <View style={styles.row}>
                <IconButton
                  color={isLiked ? colors.veryWeakRed : undefined}
                  name={`heart${isLiked ? '' : 'o'}`}
                />
                <IconButton name="message1" onPress={this._onPressComment} />
              </View>
              <View style={styles.row}>
                <IconButton
                  name={`pushpin${isPinned ? '' : 'o'}`}
                  color={colors.primary}
                />
                <IconButton name="sharealt" color={colors.primary} />
              </View>
            </View>
            <View style={styles.footerBody}>
              <Text style={styles.boldText}>
                {numeral(likes).format(likes > 1000 ? '0.0a' : '0a')} likes
              </Text>
              <Text style={styles.title}>{title}</Text>
              {Boolean(category) && <Text>{category}</Text>}
              <Text
                style={styles.description}
                numberOfLines={big ? undefined : 2}>
                {description}
              </Text>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    paddingTop: 10,
  },
  image: {
    height: 248,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  footer: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    flex: 1,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
  },
  avatar: {
    marginRight: 8,
  },
  footerBody: {
    paddingLeft: 10,
  },
  date: {},
  description: {
    fontFamily: 'Poppins-Italic',
  },
});
