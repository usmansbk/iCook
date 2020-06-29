import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../common/Text';
import TextInput from '../../common/TextInput';
import CommentItem from './CommentItem';
import {comments} from '../../screens/DishDetails/mock';

export default class Comments extends React.Component {
  render() {
    const {total, items = []} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>COMMENTS {total ? `(${total})` : ''}</Text>
        {comments.items.map((item) => (
          <CommentItem
            key={item.id}
            name={item.author.name}
            message={item.message}
            avatar={item.author.avatar}
            date={item.createdAt}
          />
        ))}
        <TextInput placeholder="Leave a comment" />
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
});
