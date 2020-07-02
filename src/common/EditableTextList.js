import React from 'react';
import {View, StyleSheet} from 'react-native';
import NumberBadge from './NumberBadge';
import Text from './Text';
import TextInput from './TextInput';
import IconButton from './IconButton';
import colors from '../config/colors';

export default ({items = []}) => {
  const [data, setData] = React.useState(items);
  const _renderItem = React.useCallback((item, index) => {
    return <Item {...item} key={index} number={index + 1} />;
  }, []);
  return <View>{data.map(_renderItem)}</View>;
};

function Item({number = 0, value, active}) {
  return (
    <View style={styles.container}>
      <NumberBadge number={number} />
      <Text style={styles.text}>{value}</Text>
      <IconButton name="checkcircle" color={colors.accent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'flex-start',
  },
  text: {
    flex: 1,
    marginLeft: 8,
  },
});
