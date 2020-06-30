import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextInput from '../../common/TextInput';
import Header from '../../common/Header';
import Button from '../../common/Button';

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  return (
    <>
      <Header goBack={_goBack} title="Email" />
      <View style={styles.container}>
        <View style={styles.field}>
          <TextInput label="Email" placeholder="Enter your new email here" />
        </View>
        <Button text="Done" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  field: {
    marginBottom: 30,
  },
});
