import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <h2 className="logo">My Portfolio</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;