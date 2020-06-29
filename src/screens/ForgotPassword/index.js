import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import Container from '../../common/Container';
import Text from '../../common/Text';
import TextInput from '../../common/TextInput';
import Button from '../../common/Button';

export default () => {
  return (
    <Container>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assets/images/lock.png')}
        />
        <View style={styles.subtitle}>
          <Text style={styles.subtitle}>
            Please enter your email address to reset password
          </Text>
        </View>
        <View style={styles.textInput}>
          <TextInput label="Email address" placeholder="Type your email" />
        </View>
        <View style={styles.button}>
          <Button text="Reset" />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 104,
    height: 136,
    marginVertical: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginVertical: 10,
  },
  subtitle: {
    margin: 16,
  },
  button: {
    marginVertical: 10,
  },
});
