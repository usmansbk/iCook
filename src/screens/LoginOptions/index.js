import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../common/Header';
import Switch from '../../common/Switch';
import Text from '../../common/Text';

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  const {
    facebook = 'bigpanda@gmail.com',
    google = 'littlepanda@gmail.com',
  } = {};
  return (
    <>
      <Header goBack={_goBack} title="Notifications" />
      <View style={styles.container}>
        <Item title="Facebook" subtitle={facebook} value={Boolean(facebook)} />
        <Item title="Google" subtitle={google} value={Boolean(google)} />
      </View>
    </>
  );
};

const Item = ({title, subtitle, value, onPress = () => null}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View>
        <Text size="h2">{title}</Text>
        <Text>{subtitle}</Text>
      </View>
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
