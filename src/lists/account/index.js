import React from 'react';
import {FlatList, TouchableOpacity, StyleSheet, View} from 'react-native';
import Text from '../../common/Text';
import Icon from '../../common/Icon';
import items from './items';
import colors from '../../config/colors';

export default class Account extends React.Component {
  _renderItem = ({item}) => {
    const {title, icon, id} = item;
    const color = id === 'logout' ? colors.veryWeakRed : colors.text;
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.label}>
          <Icon size={24} name={icon} color={color} />
          <Text style={[styles.text, {color}]} size="h2">
            {title}
          </Text>
        </View>
        {id !== 'logout' && <Icon size={24} name="right" />}
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <FlatList
        style={styles.container}
        data={items}
        renderItem={this._renderItem}
        ListFooterComponent={this._renderFooter}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
  itemContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  label: {
    flexDirection: 'row',
  },
  text: {
    marginLeft: 12,
  },
  button: {
    backgroundColor: colors.veryWeakRed,
  },
});
