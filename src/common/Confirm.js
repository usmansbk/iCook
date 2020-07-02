import React from 'react';
import {View, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Text from './Text';
import Button from './Button';
import colors from '../config/colors';

export default class Confirm extends React.Component {
  _rbRef = (ref) => (this.rbsheet = ref);
  open = () => this.rbsheet.open();
  _close = () => this.rbsheet.close();
  _onCofirm = () => {
    this._close();
    this.props.onConfirm && this.props.onConfirm();
  };

  render() {
    const {title, message} = this.props;
    return (
      <RBSheet ref={this._rbRef} closeOnDragDown closeOnPressMask>
        <View style={styles.container}>
          <Text style={styles.title} size="h1">
            {title}
          </Text>
          <Text>{message}</Text>
          <View style={styles.footer}>
            <Button
              onPress={this._close}
              customStyle={[styles.button, styles.cancel]}
              text="No"
            />
            <Button
              onPress={this._onCofirm}
              customStyle={[styles.button, styles.destruction]}
              text="Yes"
            />
          </View>
        </View>
      </RBSheet>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    height: 48,
    minWidth: 80,
    margin: 10,
    borderRadius: 16,
  },
  destruction: {
    backgroundColor: colors.veryWeakRed,
  },
  cancel: {
    backgroundColor: colors.accent,
  },
});
