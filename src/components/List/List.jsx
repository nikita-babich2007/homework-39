import { useState } from 'react';
import ListItem from '../ListItem/ListItem';

export default function List(props) {
  if (!props.list.length) {
    return <h3>Empty List</h3>;
  }

  return (
    <>
      <ul>
        {props.list.map((item) => (
          <ListItem
            key={item.id}
            listItem={item}
            onRemoveClick={props.removeHandler}
            toggleIsCompletedItem={props.toggleIsCompletedItem}
          />
        ))}
      </ul>
    </>
  );
}
