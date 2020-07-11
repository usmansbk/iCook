import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../common/Header';
import Text from '../../common/Text';
import Icon from '../../common/Icon';
import Confirm from '../../common/Confirm';
import colors from '../../config/colors';

export default ({navigation}) => {
  const confirmRef = React.useRef(null);

  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  const _toChangePassword = React.useCallback(
    () => navigation.navigate('changepassword'),
    [navigation],
  );
  const _toChangeEmail = React.useCallback(
    () => navigation.navigate('changeemail'),
    [navigation],
  );
  const _toChangeGender = React.useCallback(
    () => navigation.navigate('changegender'),
    [navigation],
  );
  const _toChangeRegion = React.useCallback(
    () => navigation.navigate('changeregion'),
    [navigation],
  );
  const _toLoginOptions = React.useCallback(
    () => navigation.navigate('loginoptions'),
    [navigation],
  );
  const {
    email = 'usmansbk@gmail.com',
    gender = 'Male',
    country = 'Nigeria',
  } = {};
  return (
    <>
      <Header goBack={_goBack} title="Account settings" />
      <View style={styles.container}>
        <Item title="Email" subtitle={email} onPress={_toChangeEmail} />
        <Item
          title="Password"
          subtitle="Change password"
          onPress={_toChangePassword}
        />
        <Item title="Gender" subtitle={gender} onPress={_toChangeGender} />
        <Item
          title="Country/region"
          subtitle={country}
          onPress={_toChangeRegion}
        />
        <Item
          color={colors.veryWeakRed}
          title="Close account"
          subtitle="Delete your account and account data"
          noScreen
          onPress={() => confirmRef.current.open()}
        />
      </View>
      <Confirm
        title="Are you sure?"
        ref={confirmRef}
        message="This will delete all your data. We'll send you an email as the final step to confirm."
      />
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
