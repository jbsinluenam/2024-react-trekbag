import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  // create a state variable to store the input value
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    // prevent the default behavior of the form
    e.preventDefault();

    // basic validation
    if (!itemText) {
      alert("Item name cannot be empty! Please enter a valid item name.");
      inputRef.current.focus();
      return;
    }

    //The only thing that this component should concern itself with is handling the text input and passing it to the parent component

    onAddItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        // set ref to the input element
        ref={inputRef}
        // bind the input value to the state variable
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus={true}
      />
      <Button>Add to list</Button>
    </form>
  );
}
