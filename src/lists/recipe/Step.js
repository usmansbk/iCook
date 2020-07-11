import React from 'react';
import {View, StyleSheet /*, Image*/} from 'react-native';
import Text from '../../common/Text';
import NumberBadge from '../../common/NumberBadge';

export default class Step extends React.Component {
  render() {
    const {step, _do /*,image*/} = this.props;
    return (
      <View style={styles.separator}>
        <View style={styles.container}>
          <View style={styles.step}>
            <NumberBadge number={step} />
          </View>
          <Text style={styles.do}>{_do}</Text>
        </View>
        {/* {Boolean(image) && <Image source={{uri: image}} style={styles.image} />} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    marginBottom: 40,
    paddingHorizontal: 20,
  },
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
  image: {
    height: 246,
    borderRadius: 5,
  },
});
