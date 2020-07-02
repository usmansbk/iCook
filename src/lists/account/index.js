import React from 'react';
import {FlatList, TouchableOpacity, StyleSheet, View} from 'react-native';
import Avatar from '../../common/Avatar';
import Text from '../../common/Text';
import Icon from '../../common/Icon';
import Confirm from '../../common/Confirm';
import items from './items';
import colors from '../../config/colors';

export default class Account extends React.Component {
  _confirmRef = (ref) => (this.confirm = ref);
  _toProfile = () =>
    this.props.navigation.navigate('profile', {id: this.props.id});
  _renderHeader = () => {
    const name = 'Usman Suleiman Babakolo';
    const email = 'usmansbk@gmail.com';
    return (
      <TouchableOpacity onPress={this._toProfile} style={styles.header}>
        <Avatar name={name} />
        <View style={styles.headerRight}>
          <Text style={styles.name} size="h1">
            {name}
          </Text>
          <Text>{email}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  _renderItem = ({item}) => {
    const {title, icon, id, route} = item;
    const color = id === 'logout' ? colors.veryWeakRed : colors.text;
    const iconName = route === 'external' ? 'earth' : 'right';
    const onPress = () => {
      if (route === 'external') {
        // open link
      } else if (route) {
        this.props.navigation.navigate(route);
      } else if (id === 'logout') {
        console.log(this.confirm.open());
      }
    };
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
        <View style={styles.label}>
          <Icon size={24} name={icon} color={color} />
          <Text style={[styles.text, {color}]} size="h2">
            {title}
          </Text>
        </View>
        {id !== 'logout' && <Icon size={24} name={iconName} />}
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <>
        <FlatList
          style={styles.container}
          data={items}
          renderItem={this._renderItem}
          ListFooterComponent={this._renderFooter}
          ListHeaderComponent={this._renderHeader}
        />
        <Confirm title="Are you sure?" ref={this._confirmRef} />
      </>
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
  header: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  name: {
    flex: 1,
  },
  headerRight: {
    flex: 1,
    marginLeft: 8,
  },
});
