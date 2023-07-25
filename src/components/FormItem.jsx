/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

export const FormItem = ({ handleAddTodo }) => {
  // TODO შევმქნათ useState input
  const [inputValue, setInputValue] = useState("");

  // TODO შევქმნათ ფუნქცია onSubmit
  const handleSubmitForm = e => {
    e.preventDefault();

    handleAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button className="btn">Add</button>
        </div>
      </form>
    </div>
  );
};
