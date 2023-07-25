/* eslint-disable react/prop-types */
export const TodoItem = ({
  handleDeleteTodo,
  handleToggleTodo,
  id,
  completed,
  title,
}) => {
  return (
    <>
      <li key={id}>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e => {
              handleToggleTodo(id, e.target.checked);
            }}
          />
          {title}
        </label>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleDeleteTodo(id);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
};
