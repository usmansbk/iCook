import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import Container from '../../common/Container';
import Button from '../../common/Button';

export default () => {
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.logo}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('../../assets/images/logo.png')}
            />
            <Image
              resizeMode="contain"
              style={styles.icook}
              source={require('../../assets/images/iCook.png')}
            />
          </View>
        </View>
        <View style={styles.button}>
          <Button text="Get started" />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  head: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  icook: {
    height: 55,
    width: 105,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 100,
  },
});
