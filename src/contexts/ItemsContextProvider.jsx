import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants";

export const ItemsContext = createContext();

export const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || initialItems;
  });

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleToggleItem = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });

    setItems(updatedItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToIntial = () => {
    setItems(initialItems);
    console.log("Reset to initial items");
  };

  const handleMarkAllAsComplete = () => {
    const updatedItems = items.map((item) => {
      return { ...item, packed: true };
    });

    setItems(updatedItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const updatedItems = items.map((item) => {
      return { ...item, packed: false };
    });

    setItems(updatedItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToIntial,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
