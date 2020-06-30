import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import Container from '../../common/Container';
import Text from '../../common/Text';
import TextInput from '../../common/TextInput';
import Button from '../../common/Button';
import Header from '../../common/Header';

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  return (
    <>
      <Header title="Forgot password" goBack={_goBack} />
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
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 104,
    height: 136,
    marginVertical: 20,
    alignSelf: 'center',
  },
  container: {
    justifyContent: 'center',
    padding: 20,
  },
  textInput: {
    marginVertical: 10,
  },
  subtitle: {
    marginVertical: 16,
  },
  button: {
    marginVertical: 10,
  },
});
