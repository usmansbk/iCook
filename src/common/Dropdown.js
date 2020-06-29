import React from 'react';
import {StyleSheet, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Text from './Text';
import Icon from './Icon';
import colors, {withOpacity} from '../config/colors';

export default ({
  disabled,
  label,
  value,
  placeholder = 'Select',
  items = [],
  noStyle,
  onValueChange = () => null,
}) => {
  return (
    <View>
      {Boolean(label) && <Text style={styles.label}>{label}</Text>}
      <View style={!noStyle && styles.border}>
        <RNPickerSelect
          disabled={disabled}
          value={value}
          items={items}
          useNativeAndroidPickerStyle={false}
          onValueChange={onValueChange}
          pickerProps={{
            itemStyle: {
              fontFamily: 'Poppins-Regular',
            },
          }}
          textInputProps={{
            placeholderTextColor: colors.inactive,
          }}
          placeholder={{
            color: colors.inactive,
            label: placeholder,
            value: '',
          }}
          style={customStyle}
          Icon={() => (
            <View style={styles.icon}>
              <Icon name="down" />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const customStyle = {
  inputAndroid: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    height: 40,
    textAlignVertical: 'center',
    padding: 8,
    margin: 0,
    color: colors.inactive,
    // backgroundColor: withOpacity.gray(0.05),
  },
  placeholder: {
    color: colors.inactive,
  },
  headlessAndroidPicker: {
    opacity: 0,
    color: colors.inactive,
  },
};

const styles = StyleSheet.create({
  border: {
    backgroundColor: withOpacity.gray(0.05),
    borderRadius: 5,
  },
  label: {
    marginBottom: 4,
  },
  icon: {
    padding: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
