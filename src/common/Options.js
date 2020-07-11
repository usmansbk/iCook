import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ActionSheet from 'react-native-raw-bottom-sheet';

export default ({options = []}) => {
  return (
    <ActionSheet>
      <FlatList data={options} />
    </ActionSheet>
  );
};

const styles = StyleSheet.create({});
