import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../common/Header';
import Text from '../../common/Text';
import Icon from '../../common/Icon';
import colors from '../../config/colors';

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  const _toChangePassword = React.useCallback(
    () => navigation.navigate('changepassword'),
    [navigation],
  );
  const {
    email = 'usmansbk@gmail.com',
    gender = 'Male',
    country = 'Nigeria',
    theme = 'Light',
  } = {};
  return (
    <>
      <Header goBack={_goBack} title="Settings" />
      <View style={styles.container}>
        <Item title="Email" subtitle={email} />
        <Item
          title="Password"
          subtitle="Change password"
          onPress={_toChangePassword}
        />
        <Item title="Gender" subtitle={gender} />
        <Item title="Country/region" subtitle={country} />
        <Item title="Socials login options" />
        <Item title="App theme" subtitle={theme} />
        <Item
          color={colors.veryWeakRed}
          title="Close account"
          subtitle="Delete your account and account data"
          noScreen
        />
      </View>
    </>
  );
};

const Item = ({color, title, subtitle, onPress = () => null, noScreen}) => {
  const c = {
    color,
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View>
        <Text style={c} size="h2">
          {title}
        </Text>
        {Boolean(subtitle) && <Text>{subtitle}</Text>}
      </View>
      {!noScreen && <Icon name="right" size={22} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
