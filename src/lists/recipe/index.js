import React from 'react';
import {SectionList} from 'react-native';
import Ingredient from './Ingredient';
import Step from './Step';
import Health from './Health';
import SectionHeader from './SectionHeader';
import Item from '../dishes/Item';
import Comments from './Reviews';

export default class Recipe extends React.Component {
  _onPressAvatar = (id) => this.props.navigation.navigate('profile', {id});
  _onPressComment = () =>
    this.props.navigation.navigate('comments', {id: this.props.id});
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
    sections.push(ingredients);
    if (steps.data.length) {
      sections.push(steps);
    }
    sections.push(health);

    return sections;
  };

  _renderSectionHeader = (data) => {
    const {
      section: {title},
    } = data;
    return <SectionHeader title={title} />;
  };

  _renderFooter = () => {
    return <Comments toComments={this._onPressComment} />;
  };

  _renderHeader = () => {
    const {data} = this.props;
    const {
      id,
      title,
      description,
      category,
      author,
      reviews,
      commentsCount,
      images,
      createdAt,
      isLiked,
    } = data;
    return (
      <Item
        disabled
        id={id}
        title={title}
        description={description}
        category={category}
        authorAvatar={author.avatar}
        authorName={author.name}
        reviews={reviews}
        commentsCount={commentsCount}
        images={images}
        date={createdAt}
        isLiked={isLiked}
        onPressItem={this._onPressItem}
        onPressAvatar={this._onPressAvatar}
        onPressComment={this._onPressComment}
        big
      />
    );
  };

  render() {
    const {data} = this.props;
    return (
      <SectionList
        initialNumToRender={1}
        ListHeaderComponent={this._renderHeader}
        renderSectionHeader={this._renderSectionHeader}
        sections={this.mapRecipeToSections(data)}
        ListFooterComponent={this._renderFooter}
      />
    );
  }
}
