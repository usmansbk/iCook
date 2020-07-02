import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextInput from '../../common/TextInput';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <TextInput required label="Title" placeholder="Food name" />
      </View>
      <View style={styles.field}>
        <TextInput
          label="Category"
          required
          placeholder="Lunch, Vegan, Gluten-Free, or anything"
        />
      </View>
      <View style={styles.field}>
        <TextInput
          label="Price"
          required
          keyboardType="number-pad"
          placeholder="Reasonable price"
        />
      </View>
      <View style={styles.field}>
        <TextInput
          label="Description"
          required
          multiline
          placeholder="That will capture your customers hearts"
        />
      </View>
      <View style={styles.field}>
        <TextInput
          label="Ingredients"
          placeholder="Add ingredient"
          icon="pluscircleo"
        />
      </View>
      <View style={styles.field}>
        <TextInput
          label="Health Benefits"
          placeholder="Add benefit"
          icon="pluscircleo"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  field: {
    marginVertical: 10,
  },
});
