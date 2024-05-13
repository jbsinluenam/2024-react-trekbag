import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);

  //All the logic for adding and removing items will be handled here
  //The functions will be passed down to the Sidebar component
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

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
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
