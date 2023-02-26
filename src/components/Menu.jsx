import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="navbar-item">
          Planning
        </Link>
        <Link to="/portfolio" className="navbar-item">
          Portfolio
        </Link>
      </div>
    </nav>
  );
};
