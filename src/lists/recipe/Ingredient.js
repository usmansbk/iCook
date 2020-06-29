import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../common/Text';

export default class Ingredient extends React.Component {
  render() {
    const {quantity, unit, of} = this.props;
    return (
      <View style={styles.row}>
        <Text style={styles.qty}>
          {quantity} {unit}
        </Text>
        <Text style={styles.of}>
          {unit ? ' of ' : ' '}
          {of}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  qty: {
    fontFamily: 'Poppins-SemiBold',
  },
  of: {
    fontFamily: 'Poppins-Regular',
  },
});
