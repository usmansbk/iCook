import React from 'react';
import {FlatList} from 'react-native';
import Item from './Item';
import data from './mock';

export default class Dishes extends React.Component {
  _renderItem = ({item}) => {
    const {
      title,
      description,
      authorName,
      authorAvatar,
      likes,
      commentsCount,
      image,
      createdAt,
      isLiked,
    } = item;
    return (
      <Item
        title={title}
        description={description}
        authorAvatar={authorAvatar}
        authorName={authorName}
        likes={likes}
        commentsCount={commentsCount}
        image={image}
        date={createdAt}
        isLiked={isLiked}
      />
    );
  };

  render() {
    return <FlatList data={data} renderItem={this._renderItem} />;
  }
}
