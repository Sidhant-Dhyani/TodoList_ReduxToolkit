import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import './TodoList.css';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.value);

  return (
    <div className="todo-list-container">
      <h2>Todo List</h2>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </div>
  );
};

export default TodoList;
