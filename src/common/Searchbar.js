import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextInput from './TextInput';

export default ({placeholder, onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search title, category, or author"
        onChangeText={onChangeText}
        value={value}
        leftIcon="search1"
        icon={value ? 'close' : undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 6,
    marginHorizontal: 20,
    backgroundColor: 'transparent',
  },
});
