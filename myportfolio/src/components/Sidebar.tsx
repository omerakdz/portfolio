import { Link, useLocation } from "react-router-dom";
import profilePic from '../assets/profile.jpg'; 

interface SidebarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function Sidebar({ isOpen, toggleMenu }: SidebarProps) {
  const location = useLocation();

  return (
<aside className={`sidebar ${isOpen ? "open" : ""}`}>
  <img src={profilePic} alt="profile" />
  <hr />
  <nav>
    <Link to="/" onClick={toggleMenu} style={{ fontWeight: location.pathname === "/" ? "bold" : "normal" }}>
      Home
    </Link>
    <Link to="/about" onClick={toggleMenu}>About</Link>
    <Link to="/projects" onClick={toggleMenu}>Projecten</Link>
    <Link to="/contact" onClick={toggleMenu}>Contact</Link>
  </nav>
</aside>
  );
}
