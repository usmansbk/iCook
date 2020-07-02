import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../common/Header';
import Switch from '../../common/Switch';
import Text from '../../common/Text';
import Confirm from '../../common/Confirm';

export default ({navigation}) => {
  const confirmRef = React.useRef(null);
  const [option, setOption] = React.useState(null);
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  const {
    facebook = 'bigpanda@gmail.com',
    google = 'littlepanda@gmail.com',
  } = {};
  const _toggleGoogle = () => {
    if (google) {
      setOption('Google');
      confirmRef.current.open();
    }
  };
  const _toggleFacebook = () => {
    if (facebook) {
      setOption('Facebook');
      confirmRef.current.open();
    }
  };

  const _onConfirm = () => {
    console.log('disconnect', option);
    setOption(null);
  };

  return (
    <>
      <Header goBack={_goBack} title="Login Options" />
      <View style={styles.container}>
        <Item
          title="Facebook"
          onPress={_toggleFacebook}
          subtitle={facebook}
          value={Boolean(facebook)}
        />
        <Item
          title="Google"
          onPress={_toggleGoogle}
          subtitle={google}
          value={Boolean(google)}
        />
      </View>
      <Confirm
        title={`Disconnect ${option}`}
        ref={confirmRef}
        message="This will delete your credentials from our database"
        onConfirm={_onConfirm}
      />
    </>
  );
};

const Item = ({title, subtitle, value, onPress = () => null}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={onPress}>
        <Text size="h2">{title}</Text>
        <Text>{subtitle}</Text>
      </TouchableOpacity>
      <Switch onPress={onPress} value={value} />
    </View>
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
