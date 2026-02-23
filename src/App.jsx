import './App.css';
import List from './components/List/List';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const addNewTodo = () => {
    if (!newTodo.length) {
      return;
    }

    setTodo((prevTodo) => [
      ...prevTodo,
      { id: uuidv4(), text: newTodo, isCompleted: false },
    ]);
    setNewTodo('');
  };

  const removeItem = (removeId) => {
    setTodo((prevTodo) => prevTodo.filter((item) => item.id !== removeId));
  };

  const toggleIsCompletedItem = (targetId) => {
    setTodo((prevTodo) =>
      prevTodo.map((item) => {
        if (item.id === targetId) {
          return { ...item, isCompleted: !item.isCompleted };
        }

        return item;
      })
    );
  };

  const filteredTodos = todo.filter((item) =>
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div>
        <Input
          value={searchQuery}
          placeholder="Search items..."
          handleSetNewTodo={setSearchQuery}
        />
      </div>

      <List
        list={filteredTodos}
        removeHandler={removeItem}
        toggleIsCompletedItem={toggleIsCompletedItem}
      />

      <div>
        <Input
          value={newTodo}
          placeholder="Enter your todo item"
          handleSetNewTodo={setNewTodo}
        />
        <Button title="Add Item" handleClick={addNewTodo} />
      </div>
    </>
  );
}

export default App;