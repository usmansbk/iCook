import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Item from './Item';

export default ({navigation, data}) => {
  const _onPressAvatar = React.useCallback(
    (id) => navigation.navigate('profile', {id}),
    [navigation],
  );

  const _renderItem = React.useCallback(
    ({item}) => {
      return (
        <Item
          key={item.id}
          name={item.author.name}
          message={item.message}
          avatar={item.author.avatar}
          date={item.createdAt}
          onPressAvatar={_onPressAvatar}
        />
      );
    },
    [_onPressAvatar],
  );

  const _renderSeparator = React.useCallback(() => {
    return <View style={styles.separator} />;
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={data.items}
      renderItem={_renderItem}
      ItemSeparatorComponent={_renderSeparator}
      ListFooterComponent={_renderSeparator}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  separator: {
    height: 20,
  },
});
