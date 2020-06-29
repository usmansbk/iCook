import React from 'react';
import {FlatList} from 'react-native';
import data from './mock';

export default class Dishes extends React.Component {
  render() {
    return <FlatList data={data} />;
  }
}
