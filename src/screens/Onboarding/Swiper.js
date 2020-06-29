import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
import Text from '../../common/Text';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  h1: {
    color: colors.primary,
    fontFamily: 'Poppins-Bold',
    marginVertical: 10,
  },
  image: {
    width: 335,
    height: 294,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  subtitle: {
    textAlign: 'center',
    padding: 8,
  },
  swiper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const pages = [
  {
    key: 1,
    image: require('./img/1.png'),
    title: 'Find foods you love',
    subtitle: 'Learn new recipe from other chefs and create that food you love',
  },
  {
    key: 2,
    image: require('./img/2.png'),
    title: 'Capture hearts',
    subtitle: 'Nothing says home like the smell of baking',
  },
  {
    key: 3,
    image: require('./img/3.png'),
    title: 'Share your Recipe',
    subtitle: 'Share your unique cooking recipe with a host of other chefs.',
  },
];

export default () => {
  return (
    <Swiper loop={false} style={styles.swiper} activeDotColor={colors.primary}>
      {pages.map((page) => (
        <View style={styles.page} key={page.key}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={page.image}
          />
          <Text size="h1" style={styles.h1}>
            {page.title}
          </Text>
          <Text style={styles.subtitle}>{page.subtitle}</Text>
        </View>
      ))}
    </Swiper>
  );
};
