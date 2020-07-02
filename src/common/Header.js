import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import Text from './Text';
import Icon from './Icon';
import colors from '../config/colors';

export default ({title, goBack, rightAction, rightIcon, rightIconColor}) => {
  return (
    <Appbar.Header style={styles.header}>
      {Boolean(goBack) && (
        <Appbar.Action
          onPress={goBack}
          color={colors.text}
          icon={({color, size}) => (
            <Icon size={size} color={color} name="left" />
          )}
        />
      )}
      <Appbar.Content
        style={styles.content}
        title={
          <Text numberOfLines={1} style={styles.title} size="h2">
            {title}
          </Text>
        }
      />
      {Boolean(rightAction) && (
        <Appbar.Action
          onPress={rightAction}
          color={rightIconColor || colors.text}
          icon={({color, size}) => (
            <Icon size={size} color={color} name={rightIcon} />
          )}
        />
      )}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    elevation: 0,
    paddingVertical: 10,
  },
  content: {
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
});
