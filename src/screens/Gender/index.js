import React from 'react';
import {View, StyleSheet} from 'react-native';
import Checkbox from '../../common/Checkbox';
import Header from '../../common/Header';
import Button from '../../common/Button';
import Text from '../../common/Text';

const Item = ({value, checked}) => {
  return (
    <View style={styles.checkbox}>
      <Checkbox checked={checked} />
      <Text style={styles.text} size="h2">
        {value}
      </Text>
    </View>
  );
};

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  return (
    <>
      <Header goBack={_goBack} title="Gender" />
      <View style={styles.container}>
        <View style={styles.field}>
          <Item value="Female" />
        </View>
        <View style={styles.field}>
          <Item value="Male" checked />
        </View>
        <View style={styles.field}>
          <Item value="Non-Binary" />
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
  checkbox: {
    flexDirection: 'row',
  },
  text: {
    marginLeft: 12,
  },
});
