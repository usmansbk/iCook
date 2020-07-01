import React from 'react';
import {FlatList} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';
import Item from './Item';
import Empty from './Empty';

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
  const _renderEmpty = React.useCallback(() => {
    return <Empty message={props.emptyTitle} subtitle={props.emptySubtitle} />;
  }, [props.emptySubtitle, props.emptyTitle]);

  const _renderItem = React.useCallback(
    ({item}) => {
      const {
        id,
        title,
        description,
        author,
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
    },
    [_onPressAvatar, _onPressComment, _onPressItem],
  );
  return (
    <FlatList
      ref={ref}
      initialNumToRender={1}
      data={[] || props.items || []}
      renderItem={_renderItem}
      ListEmptyComponent={_renderEmpty}
    />
  );
}
