import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Swiper from 'react-native-swiper';

export default ({imagesUrls = [], onPress}) => {
  return (
    <Swiper loop={false} height={248}>
      {imagesUrls.map((uri, index) => (
        <TouchableWithoutFeedback key={index} onPress={onPress}>
          <Image source={{uri}} style={styles.image} />
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
