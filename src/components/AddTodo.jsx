import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/todoSlice';
import './AddTodo.css';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    dispatch(add(inputValue));
    setInputValue('');
  };

  return (
    <div className="add-todo-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
        className="add-todo-input"
      />
      <button onClick={handleAddTodo} className="add-todo-button">
        Add
      </button>
    </div>
  );
};

export default AddTodo;