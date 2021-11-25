import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>Conghau STORE</h2>
      </div>

      {/* {linlk} */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            {/* icon */}
            <i className="fas fa-shopping-cart"></i>
            <span>
              Giỏ hàng
              <span className="cartlogo__badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            CỬA HÀNG
          </Link>
        </li>
      </ul>
      {/* hamburger menu */}
      <div className="hamburger_menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div> 
      </div>
    </nav>
  );
};

export default Navbar;
