import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextInput from '../../common/TextInput';
import Header from '../../common/Header';
import Button from '../../common/Button';

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  return (
    <>
      <Header goBack={_goBack} title="Change password" />
      <View style={styles.container}>
        <View style={styles.field}>
          <TextInput
            label="Current password"
            placeholder="Enter your current password"
            secure
            icon="eye"
          />
        </View>
        <View style={styles.field}>
          <TextInput
            label="New password"
            secure
            icon="eye"
            placeholder="Enter your new password"
          />
        </View>
        <View style={styles.field}>
          <TextInput
            label="Confirm new password"
            secure
            icon="eye"
            placeholder="Enter your new password again"
          />
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
