import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../../common/Text';
import colors from '../../config/colors';
import countries from './mock';

export default ({currentCountry = 'ng'}) => {
  const _renderItem = ({item}) => {
    const {name, native, id} = item;
    const selected = id === currentCountry;
    const style = {
      color: selected ? colors.veryWeakRed : colors.text,
    };
    return (
      <TouchableOpacity style={styles.item}>
        <Text style={style} size="h2">
          {name}
        </Text>
        {Boolean(native) && <Text>{native}</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={countries}
      renderItem={_renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
  item: {
    marginVertical: 10,
  },
});
