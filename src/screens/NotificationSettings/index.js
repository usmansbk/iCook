import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../common/Header';
import Switch from '../../common/Switch';
import Text from '../../common/Text';

export default ({navigation}) => {
  const _goBack = React.useCallback(() => navigation.goBack(), [navigation]);
  const [mount, setMount] = React.useState(false);
  React.useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }
  const {
    like = true,
    comment = true,
    newsletter = true,
    autoUpdate = false,
  } = {};
  return (
    <>
      <Header goBack={_goBack} title="Notifications" />
      <View style={styles.container}>
        <Item title="Liked my dish" value={like} />
        <Item title="Comment on my dish" value={comment} />
        <Item title="Newsletter" value={newsletter} />
      </View>
    </>
  );
};

const Item = ({title, value, onPress = () => null}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text style={styles.text} size="h2">
        {title}
      </Text>
      <Switch value={value} />
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
  text: {
    flex: 1,
  },
});
