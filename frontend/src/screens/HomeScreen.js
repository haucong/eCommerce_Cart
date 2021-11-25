import "./HomeScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//Component
import Product from "../components/Product";

//actions
import { getProducts as listProducts } from "../components/redux/actions/productAction";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className='homescreen'>
      <h2 className='homescreen__title'>SẢN PHẨM MỚI NHẤT</h2>
      <div className='homescreen__products'>
        {loading ? (
          <h2>Đang tải...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  )
};

export default HomeScreen;
