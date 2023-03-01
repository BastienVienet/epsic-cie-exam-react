import { Link } from "react-router-dom";
import { elastic as MenuSlide } from "react-burger-menu";
import "../styles/Burger.css";

export const Menu = () => {
  return (
    <MenuSlide right>
      <div>
        <div className="my-4 has-text-light">
          <Link to="/" className="menu-item">
            Planning
          </Link>
        </div>
        <div className="my-4 has-text-light">
          <Link to="/portfolio" className="menu-item">
            Portfolio
          </Link>
        </div>
      </div>
    </MenuSlide>
  );
};
