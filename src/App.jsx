import { useState, useEffect } from "react";

import { FormItem } from "./components/FormItem";
import { TodoList } from "./components/todoList";

import "./styles.css";

function App() {
  // TODO შევმქნათ useState todo
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  // TODO შევქმნათ addTodo ფუნქცია
  const handleAddTodo = title => {
    if (title.length === 0) return alert("Please Enter Todo");
    setTodos(prev => {
      return [...prev, { title, id: crypto.randomUUID(), completed: false }];
    });
  };

  // TODO შევქმნათ ფუნქცია todo-s წაშლისა
  const handleDeleteTodo = id => {
    setTodos(prev => {
      return prev.filter(todo => todo.id !== id);
    });
  };
  // TODO შევქმნათ ფუნქცია todo-s toggle
  const handleToggleTodo = (id, completed) => {
    setTodos(prev => {
      return prev.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };
  // TODO შევქმნათ იუზეფექტი რომელიც, localStorage-ში შეინახავს TODO-ს
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <FormItem handleAddTodo={handleAddTodo} />
      <h1 className="header">Todos</h1>
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleToggleTodo={handleToggleTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
