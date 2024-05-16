import { useEffect, useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || initialItems;
  });

  //counter logic
  const totalItems = items.length;

  const totalItemsPacked = items.filter((item) => item.packed).length;

  //Best practice
  //We centralized the functions that handle the state of the items in the App component
  //All the logic for adding and removing items will be handled here
  //This is the cleanest way to manage the state of the items

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
    <>
      <BackgroundHeading />

      <main>
        <Header totalItems={totalItems} totalItemsPacked={totalItemsPacked} />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToIntial={handleResetToIntial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
