import React from 'react';
import {SectionList, StyleSheet, View} from 'react-native';
import Ingredient from './Ingredient';
import Step from './Step';
import Health from './Health';
import SectionHeader from './SectionHeader';
import Item from '../dishes/Item';

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

  _renderFooter = () => {
    return <View style={styles.footer} />;
  };

  _renderHeader = () => {
    const {data} = this.props;
    const {
      id,
      title,
      description,
      author,
      likes,
      commentsCount,
      image,
      createdAt,
      isLiked,
    } = data;
    return (
      <Item
        disabled
        id={id}
        title={title}
        description={description}
        authorAvatar={author.avatar}
        authorName={author.name}
        likes={likes}
        commentsCount={commentsCount}
        image={image}
        date={createdAt}
        isLiked={isLiked}
        onPressItem={this._onPressItem}
      />
    );
  };

  render() {
    const {data} = this.props;
    return (
      <SectionList
        ListHeaderComponent={this._renderHeader}
        renderSectionHeader={this._renderSectionHeader}
        sections={this.mapRecipeToSections(data)}
        ListFooterComponent={this._renderFooter}
      />
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    height: 100,
  },
});
