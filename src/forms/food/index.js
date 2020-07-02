import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import TextInput from '../../common/TextInput';
import Text from '../../common/Text';
import Carousel from '../../common/Carousel';
import Button from '../../common/Button';
import IngredientsList from './Ingredients';
import {currencies} from '../../lib/constants';

export default ({values = {}}) => {
  const {images = []} = values;
  return (
    <ScrollView style={styles.container}>
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
          items={currencies}
          keyboardType="number-pad"
          placeholder="Reasonable price"
          dropdownPlaceholder="Currency"
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
        <Text>Ingredients</Text>
        <View>
          <IngredientsList />
        </View>
        <Button text="Add Ingredient" />
      </View>
      <View style={styles.field}>
        <TextInput
          label="Health Benefits"
          placeholder="Add benefit"
          multiline
          icon="pluscircleo"
        />
      </View>
      <View style={styles.field}>
        {Boolean(images.length) && <Carousel edit imagesUrls={images} />}
        <Button text="Add food image" />
      </View>
      <View style={[styles.field, styles.last]}>
        <Button text="Save dish" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
  field: {
    marginVertical: 10,
  },
  last: {
    paddingBottom: 20,
  },
});
