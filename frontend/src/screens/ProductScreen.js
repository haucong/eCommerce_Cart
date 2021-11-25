import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//actions
import { getProductsDetails } from '../components/redux/actions/productAction'
import { addToCart } from "../components/redux/actions/cartActions";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const ProductDetails = useSelector((state) => state.getProductsDetails);
  const { loading, error, product } = ProductDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductsDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    console.log("asdf");
    history.push(`/cart`);
  };
  return (
    <div className='productscreen'>
      {loading ? (
        <h2>Đang tải...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className='productscreen__left'>
            <div className='left__image'>
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className='left__info'>
              <p className='left__name'>{product.name}</p>
              <p>{product.price} vnd</p>
              <p> Mô tả: {product.description}</p>
            </div>
          </div>
          <div className='productscreen__right'>
            <p className='right__info'>
              Giá: <span>{product.price}vnd</span>
            </p>
            <p>
              Trạng thái:
              <span>{product.countInStock > 0 ? 'còn hàng' : 'hết hàng'}</span>
            </p>

            <p>
              <p className='soluong'>Số lượng</p>
              <select value={qty} onChange={(e) => setQty(e.target.value)}>
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option value={x + 1} key={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </p>
            <button type='button' className='btn' onClick={addToCartHandler}>
              Thêm vào vỏ hàng
            </button>
          </div>
        </>
      )}
    </div>
  )
};

export default ProductScreen;
