import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Item from './Item';

export default ({items = [], navigation}) => {
  const _toProfile = React.useCallback(
    (id) => navigation.navigate('profile', {id}),
    [navigation],
  );
  const _renderItem = React.useCallback(
    ({item}) => {
      return <Item {...item} onPress={_toProfile} />;
    },
    [_toProfile],
  );
  return (
    <FlatList
      initialNumToRender={1}
      style={styles.container}
      renderItem={_renderItem}
      data={items}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
});