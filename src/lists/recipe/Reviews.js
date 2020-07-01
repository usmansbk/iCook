import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../common/Text';
import CommentItem from '../comments/Item';
import CommentInput from '../../forms/comment';

export default class Comments extends React.Component {
  _toComments = () => this.props.toComments();
  render() {
    const {total, items = []} = this.props;
    return (
      <View style={styles.container}>
        <Text onPress={this._toComments} style={styles.heading}>
          COMMENTS {total ? `(${total})` : ''}
        </Text>
        {items.map((item) => (
          <CommentItem
            key={item.id}
            rating={item.rating}
            name={item.author.name}
            message={item.message}
            avatar={item.author.avatar}
            date={item.createdAt}
          />
        ))}
        <View style={styles.input}>
          <CommentInput />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 60,
  },
  heading: {
    fontFamily: 'Poppins-SemiBold',
  },
  input: {
    marginVertical: 10,
  },
});
