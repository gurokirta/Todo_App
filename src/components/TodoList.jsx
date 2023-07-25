/* eslint-disable react/prop-types */
import { TodoItem } from "./todoItem";

export const TodoList = ({ handleDeleteTodo, handleToggleTodo, todos }) => {
  return (
    <>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return (
            <TodoItem
              {...todo}
              handleDeleteTodo={handleDeleteTodo}
              handleToggleTodo={handleToggleTodo}
              key={todo.id}
            />
          );
        })}
      </ul>
    </>
  );
};
