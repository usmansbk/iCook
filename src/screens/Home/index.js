import React from 'react';
import {View} from 'react-native';
import Avatar from '../../common/Avatar';
import Text from '../../common/Text';

export default () => {
  const name = 'Usman Suleiman';
  return (
    <View>
      <Avatar name={name} />
      <Text>
        Good morning, <Text>{name}</Text>
      </Text>
    </View>
  );
};
