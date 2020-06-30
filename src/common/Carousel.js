import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Swiper from 'react-native-swiper';

export default ({imagesUrls = [], onPress}) => {
  return (
    <Swiper loop={false} height={248}>
      {imagesUrls.map((uri) => (
        <TouchableWithoutFeedback onPress={onPress}>
          <Image key={uri} source={{uri}} style={styles.image} />
        </TouchableWithoutFeedback>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 248,
  },
});
