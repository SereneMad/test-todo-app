import React, { useState } from 'react';
import TodoItem from './item/TodoItem';
import CreateTodoField from './create-todo-field/CreateTodoField';

const data = [
  {
    id: 'w1',
    title: 'Finish the essay collaboration',
    isCompleted: false,
  },
  {
    id: 'w2',
    title: 'Read the next chapter of fthe book',
    isCompleted: false,
  },
  {
    id: 'w3',
    title: 'Send the finished assignment',
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t.id !== id));
  };

  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">Todo App</h1>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
};

export default Home;
