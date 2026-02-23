import Button from '../Button/Button';
import './ListItem.css';

export default function ListItem({
  listItem,
  onRemoveClick,
  toggleIsCompletedItem,
}) {
  let classes = 'list-item-wrapper';
  return (
    <div
      className={
        listItem.isCompleted
          ? `${classes} completed-list-item-wrapper`
          : classes
      }
    >
      <li className="list-item">{listItem.text}</li>
      <Button
        title="Remove Item"
        handleClick={() => onRemoveClick(listItem.id)}
      />

      <Button
        title={
          listItem.isCompleted ? 'Mark as not completed' : 'Mark as completed'
        }
        handleClick={() => toggleIsCompletedItem(listItem.id)}
      />
    </div>
  );
}
