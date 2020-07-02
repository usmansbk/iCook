import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import Swiper from 'react-native-swiper';
import IconButton from './IconButton';
import colors from '../config/colors';

export default ({
  imagesUrls = [],
  onPress = () => null,
  edit = false,
  onDelete = () => null,
}) => {
  return (
    <Swiper loop={false} height={248}>
      {imagesUrls.map((uri, index) => (
        <TouchableWithoutFeedback key={index} onPress={onPress}>
          <View>
            <Image source={{uri}} style={styles.image} />
            <View style={styles.button}>
              {edit && (
                <IconButton
                  name="close"
                  color={colors.veryWeakRed}
                  onPress={onDelete}
                />
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 248,
  },
  button: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 24,
  },
});
