import React from 'react';
import EditableList from '../../common/EditableTextList';

export default ({items = []}) => {
  return (
    <EditableList
      items={items.map((item) => ({id: item.id, value: item.gain}))}
    />
  );
};
