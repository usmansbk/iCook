import React from 'react';
import {FlatList} from 'react-native';
import Item from './Item';
import data from './mock';

export default class Dishes extends React.Component {
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
        initialNumToRender={1}
        data={data}
        renderItem={this._renderItem}
      />
    );
  }
}
