import "./CartScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//component
import CartItems from "../components/CartItems";

//actions
import { addToCart,removeFromCart } from "../components/redux/actions/cartActions";

const CartScreen = () => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  const qtyChangeHandler= (id, qty) => {
    dispatch(addToCart(id, qty))
  }
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }
   const getCartCount = () => {
     return cartItems.reduce((qty,item) => Number(item.qty) + qty, 0)
   };
   const getCartSubtotal = () => {
     return cartItems.reduce((price, item) => item.price * item.qty + price, 0)
   }
  return (
    <div className='cartscreen'>
      <div className='cartscreen__left'>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Vỏ hàng của bạn trống <Link to='/'>Trở về</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItems
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeFromCartHandler}
            />
          ))
        )}
      </div>
      <div className='cartscreen__right'>
        <div className='cartscreen__info'>
          <p>Tổng tộng {getCartCount()} sản phẩm</p>
          <p> $ {getCartSubtotal().toFixed(2)}</p>
        </div>
        <div>
          <button>Thanh toán</button>
        </div>
      </div>
    </div>
  )
};

export default CartScreen;
