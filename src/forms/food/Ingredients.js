import React from 'react';
import EditableList from '../../common/EditableTextList';
import Ingredient from '../../common/Ingredient';

export default ({items}) => {
  const _renderItem = (item) => <Ingredient key={item.id} {...item} />;
  return (
    <EditableList items={items} editable={false} renderItem={_renderItem} />
  );
};
