import { Menu } from "lucide-react";

interface Props {
  toggleMenu: () => void;
}

export default function HamburgerMenu({ toggleMenu }: Props) {
  return (
    <button
      onClick={toggleMenu}
      className="hamburger-button"
      aria-label="Toggle menu"
    >
      <Menu />
    </button>
  );
}