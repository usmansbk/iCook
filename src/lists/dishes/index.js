import React from 'react';
import {FlatList} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';
import Item from './Item';
import data from './mock';

export default function Dishes(props) {
  const ref = React.useRef(null);
  useScrollToTop(ref);

  const _onPressItem = React.useCallback(
    (id) => props.navigation.navigate('details', {id}),
    [props.navigation],
  );
  const _onPressAvatar = React.useCallback(
    (id) => props.navigation.navigate('profile', {id}),
    [props.navigation],
  );
  const _renderItem = ({item}) => {
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
        onPressItem={_onPressItem}
        onPressAvatar={_onPressAvatar}
      />
    );
  };
  return (
    <FlatList
      ref={ref}
      initialNumToRender={1}
      data={data}
      renderItem={_renderItem}
    />
  );
}
