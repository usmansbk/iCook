import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Header from './Header';
import Item from '../dishes/Item';
import mock from '../dishes/mock';

export default class Profile extends React.Component {
  _renderHeader = () => {
    return <Header />;
  };

  _onPressItem = (id) => null;
  _renderItem = ({item}) => {
    const {
      id,
      title,
      description,
      author,
      likes,
      commentsCount,
      image,
      createdAt,
      isLiked,
    } = item;
    return (
      <Item
        id={id}
        title={title}
        description={description}
        authorAvatar={author.avatar}
        authorName={author.name}
        likes={likes}
        commentsCount={commentsCount}
        image={image}
        date={createdAt}
        isLiked={isLiked}
        onPressItem={this._onPressItem}
      />
    );
  };
  render() {
    return (
      <FlatList
        ListHeaderComponent={this._renderHeader}
        renderItem={this._renderItem}
        data={mock}
      />
    );
  }
}

const styles = StyleSheet.create({});
