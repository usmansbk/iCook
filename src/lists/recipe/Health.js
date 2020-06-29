import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../common/Text';

export default class Ingredient extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.gain}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
