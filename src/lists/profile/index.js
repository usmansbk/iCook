import React from 'react';
import {FlatList} from 'react-native';
import Header from './Header';
import Item from '../dishes/Item';

export default class Profile extends React.Component {
  _renderHeader = () => {
    return <Header {...this.props.user} toFollow={this._toFollow} />;
  };

  _onPressItem = (id) => this.props.navigation.navigate('details', {id});
  _onPressComment = (id) => this.props.navigation.navigate('comments', {id});
  _toFollow = (options) => this.props.navigation.navigate('follow', options);
  _onPressAvatar = (id) => null;
  _renderItem = ({item}) => {
    const {
      id,
      title,
      description,
      author,
      commentsCount,
      images,
      createdAt,
      isLiked,
    } = item;
    return (
      <Item
        id={id}
        title={title}
        description={description}
        authorAvatar={author.avatar}
        authorName={author.name}
        commentsCount={commentsCount}
        images={images}
        date={createdAt}
        isLiked={isLiked}
        onPressItem={this._onPressItem}
        onPressAvatar={this._onPressAvatar}
        onPressComment={this._onPressComment}
      />
    );
  };
  render() {
    return (
      <FlatList
        initialNumToRender={1}
        ListHeaderComponent={this._renderHeader}
        renderItem={this._renderItem}
        data={this.props.items}
      />
    );
  }
}
