import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, edit } from '../redux/todoSlice';
import './TodoItem.css';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(todo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(index));
  };

  const handleSave = () => {
    dispatch(edit({ index, newText: inputValue }));
    setIsEditing(false);
  };

  return (
    <li className="todo-item-container">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleSave} className="save-button">
            Save
          </button>
        </div>
      ) : (
        <div>
          <div className="todo-text">{todo}</div>
          <div className="todo-buttons">
            <button onClick={handleEdit} className="edit-button">
              Edit
            </button>
            <button onClick={handleDelete} className="delete-button">
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;