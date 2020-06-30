import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

export default ({imagesUrls = []}) => {
  return (
    <Swiper loop={false} height={248}>
      {imagesUrls.map((uri) => (
        <Image key={uri} source={{uri}} style={styles.image} />
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 248,
  },
});
