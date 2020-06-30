import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';
import {getAvatarBackgroundColor} from '../lib/utils';
import {avatarColorsWithOpacity} from '../config/colors';

const sizes = {
  h1: 80,
  h2: 64,
  h3: 40,
  h4: 30,
};

const ImageAvatar = ({style, source}) => {
  return <Image style={style} source={source} />;
};

const TextAvatar = ({name = '', size, style, color}) => {
  const textStyle = {
    color,
    fontSize: size,
    fontFamily: 'sans-serif-light',
  };

  return (
    <View style={[textStyles.container, style]}>
      <Text adjustsFontSizeToFit style={textStyle}>
        {name[0].toUpperCase()}
      </Text>
    </View>
  );
};

export default ({name, size = 'h2', uri, onPress, disabled}) => {
  const diameter = sizes[size];
  const radius = diameter / 2;
  const color = getAvatarBackgroundColor(name);
  const backgroundColor = avatarColorsWithOpacity[color];
  const style = {
    width: diameter,
    height: diameter,
    borderRadius: radius,
    backgroundColor,
  };

  let Avatar = null;

  if (!uri) {
    Avatar = (
      <TextAvatar name={name} size={radius} style={style} color={color} />
    );
  } else {
    Avatar = <ImageAvatar source={{uri}} size style={style} />;
  }
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      {Avatar}
    </TouchableOpacity>
  );
};

const textStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
