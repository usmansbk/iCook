import React from 'react';
import {View, StyleSheet} from 'react-native';
import NumberBadge from './NumberBadge';
import Text from './Text';
import TextInput from './TextInput';

export default ({items = [], editable}) => {
  const [data] = React.useState(items);
  const _renderItem = React.useCallback(
    (item, index) => {
      return <Item {...item} key={index} edit={editable} number={index + 1} />;
    },
    [editable],
  );
  return <View>{data.map(_renderItem)}</View>;
};

function Item({
  number = 0,
  value,
  edit = true,
  onSubmit = () => null,
  onDelete = () => null,
}) {
  return (
    <View style={styles.container}>
      {Boolean(!edit) && (
        <View style={styles.badge}>
          <NumberBadge number={number} />
        </View>
      )}
      <View style={styles.content}>
        {edit ? (
          <TextInput
            value={value}
            icon="checkcircle"
            iconSize={16}
            multiline
            leftIcon="closecircle"
            onPressIcon={onSubmit}
            onPressLeftIcon={onDelete}
          />
        ) : (
          <Text style={styles.text}>{value}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'flex-start',
  },
  content: {
    flex: 1,
  },
  text: {
    marginLeft: 8,
  },
});
