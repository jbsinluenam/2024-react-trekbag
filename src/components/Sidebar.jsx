import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemsContext } from "../lib/hooks";

export default function Sidebar() {
  const { handleAddItem } = useItemsContext();

  return (
    <div className="sidebar">
      {/* Naming convention 
      In AddItemForm component, the component is responsible for the event handling of adding an item to the list.
      So, we can rename the prop handleAddItem to onAddItem to make it more descriptive.
      And this onAddItem prop will be passed down to the AddItemForm component to handle the event of adding an item to the list.
      */}
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}
