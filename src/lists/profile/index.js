import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Header from './Header';

export default class Profile extends React.Component {
  _renderHeader = () => {
    return <Header />;
  };
  render() {
    return <FlatList ListHeaderComponent={this._renderHeader} />;
  }
}

const styles = StyleSheet.create({});
