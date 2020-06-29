import React from 'react';
import {SectionList, StyleSheet} from 'react-native';
import Ingredient from './Ingredient';
import Step from './Step';
import Health from './Health';
import SectionHeader from './SectionHeader';

export default class Recipe extends React.Component {
  mapRecipeToSections = (recipe) => {
    const sections = [];
    const ingredients = {
      data: recipe.ingredients,
      title: 'INGREDIENTS',
      renderItem: ({item}) => {
        return (
          <Ingredient
            id={item.id}
            quantity={item.quantity}
            unit={item.unit}
            of={item.of}
          />
        );
      },
    };

    const steps = {
      data: recipe.steps,
      title: 'PREPARATION',
      renderItem: ({item}) => {
        return (
          <Step
            id={item.id}
            _do={item.do}
            step={item.step}
            image={item.image}
          />
        );
      },
    };

    const health = {
      data: recipe.healthBenefits,
      title: 'HEALTH BENEFITS',
      renderItem: ({item}) => {
        return <Health gain={item.gain} />;
      },
    };

    sections.push(ingredients, steps, health);

    return sections;
  };

  _renderSectionHeader = (data) => {
    const {
      section: {title},
    } = data;
    return <SectionHeader title={title} />;
  };

  render() {
    const {data} = this.props;
    return (
      <SectionList
        contentContainerStyle={styles.container}
        renderSectionHeader={this._renderSectionHeader}
        sections={this.mapRecipeToSections(data)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
