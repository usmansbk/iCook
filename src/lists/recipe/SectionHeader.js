import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from '../../common/Text';

export default class Ingredient extends React.Component {
  render() {
    let source;
    switch (this.props.title) {
      case 'INGREDIENTS':
        source = require('../../assets/images/ingredients.png');
        break;
      case 'PREPARATION':
        source = require('../../assets/images/steps.png');
        break;
      case 'HEALTH BENEFITS':
        source = require('../../assets/images/health.png');
        break;
    }

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={source} />
        <Text style={styles.title} size="buttons">
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
  },
  image: {
    width: 43,
    height: 43,
    marginVertical: 10,
  },
});
