import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../common/Text';
import NumberBadge from '../../common/NumberBadge';

export default class Step extends React.Component {
  render() {
    const {step, _do} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.step}>
          <NumberBadge number={step} />
        </View>
        <Text style={styles.do}>{_do}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  step: {
    paddingRight: 10,
    paddingTop: 5,
  },
  do: {
    flex: 1,
  },
});
