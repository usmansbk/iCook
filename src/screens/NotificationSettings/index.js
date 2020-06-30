import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../common/Header';
import Switch from '../../common/Switch';
import Text from '../../common/Text';

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  const {activityOnPost = false, newsletter = true, autoUpdate = true} = {};
  return (
    <>
      <Header goBack={_goBack} title="Notifications Settings" />
      <View style={styles.container}>
        <Item title="Activity on posts" value={activityOnPost} />
        <Item title="Newsletter" value={newsletter} />
        <Item title="Auto update App" value={autoUpdate} />
      </View>
    </>
  );
};

const Item = ({title, value, onPress = () => null}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text size="h2">{title}</Text>
      <Switch value={value} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
