import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ totalItems, totalItemsPacked }) {
  return (
    <header>
      <Logo />
      <Counter totalItems={totalItems} totalItemsPacked={totalItemsPacked} />
    </header>
  );
}
