import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#eee", display: "flex", gap: "1rem" }}>
      <Link to="/">Accueil</Link>
      <Link to="/about">À propos</Link>
      <Link to="/project">Projets</Link>
      <Link to="/resume">CV</Link>
    </nav>
  );
}
