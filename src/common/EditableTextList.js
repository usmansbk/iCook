import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import NumberBadge from './NumberBadge';
import Text from './Text';
import TextInput from './TextInput';

export default ({items = [], editable = true, renderItem}) => {
  const [data] = React.useState(items);
  const _renderItem = React.useCallback(
    (item, index) => {
      return (
        <Item {...item} key={index} editable={editable} number={index + 1} />
      );
    },
    [editable],
  );
  return <View>{data.map(renderItem || _renderItem)}</View>;
};

function Item({
  number = 0,
  value,
  editable = false,
  onSubmit = () => null,
  onDelete = () => null,
}) {
  const [edit, setEdit] = React.useState(false);
  const _setEdit = React.useCallback(() => {
    if (editable) {
      setEdit(true);
    }
  }, [editable]);
  const _onSubmit = React.useCallback(() => {
    setEdit(false);
    onSubmit();
  }, [setEdit, onSubmit]);
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
            onPressIcon={_onSubmit}
            onPressLeftIcon={onDelete}
            autoFocus
          />
        ) : (
          <TouchableOpacity onPress={_setEdit}>
            <Text style={styles.text}>{value}</Text>
          </TouchableOpacity>
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
