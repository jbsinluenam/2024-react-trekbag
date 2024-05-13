import Button from "./Button";

export default function ButtonGroup({
  handleRemoveAllItems,
  handleResetToIntial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  return (
    // create button group in react way
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={handleMarkAllAsIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={handleResetToIntial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={handleRemoveAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
}
