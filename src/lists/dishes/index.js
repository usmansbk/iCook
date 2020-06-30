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
  const _onPressComment = React.useCallback(
    (id) => props.navigation.navigate('comments', {id}),
    [props.navigation],
  );
  const _renderItem = ({item}) => {
    const {
      id,
      title,
      description,
      author,
      reviews,
      rating,
      commentsCount,
      images,
      createdAt,
      isLiked,
      isPinned,
    } = item;
    return (
      <Item
        id={id}
        title={title}
        description={description}
        authorAvatar={author.avatar}
        authorName={author.name}
        reviews={reviews}
        rating={rating}
        commentsCount={commentsCount}
        images={images}
        date={createdAt}
        isLiked={isLiked}
        isPinned={isPinned}
        onPressItem={_onPressItem}
        onPressAvatar={_onPressAvatar}
        onPressComment={_onPressComment}
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
