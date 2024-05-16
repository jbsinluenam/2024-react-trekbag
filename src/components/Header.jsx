import { useItemsContext } from "../lib/hooks";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  const { items } = useItemsContext();

  return (
    <header>
      <Logo />
      <Counter
        totalItems={items.length}
        totalItemsPacked={items.filter((item) => item.packed).length}
      />
    </header>
  );
}
