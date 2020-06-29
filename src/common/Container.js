import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

export default ({children}) => {
  return (
    <ScrollView
      style={styles.style}
      keyboardShouldPersistTaps="always"
      contentContainerStyle={styles.container}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  style: {
    backgroundColor: 'white',
  },
});
