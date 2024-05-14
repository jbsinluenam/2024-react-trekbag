export default function Counter({ totalItems, totalItemsPacked }) {
  return (
    <p>
      <b>{totalItemsPacked} </b>/ {totalItems} items packed
    </p>
  );
}
