import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
const Navbar = ({ click }) => {
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
    
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

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
              <span className="cartlogo__badge">{getCartCount()} </span>
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
