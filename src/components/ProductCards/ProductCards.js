import axios from "axios";
import { useEffect, useContext, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import { ProductsContext } from "../../Helper/Context";
import { SpinnerCircular } from "spinners-react";
import Modal from "../UI/Modal/Modal";

const ProductCards = ({ showInfo }) => {
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const {
    products,
    setProducts,
    loading,
    setLoading,
    productFailed,
    setProductFailed,
  } = useContext(ProductsContext);

  useEffect(() => {
    const fetchProducts = () => {
      axios
        .get("https://morning-headland-70594.herokuapp.com/products")
        .then((res) => {
          setLoading(false);
          setProductFailed(false);
          setProducts(res.data);
        })
        .catch((err) => {
          setLoading(false);
          setProductFailed(true);
          setError(err.message);
          setModal(true);
        });
    };
    fetchProducts();
  }, [setLoading, setProducts, setProductFailed]);

  return (
    <div className={!loading ? "grid grid-cols-2  sm:grid-cols-4 w-[100%] m-auto sm:w-full sm:p-4   sm:gap-2" : undefined}>
      {loading ? (
        <SpinnerCircular
          color="#4f7f19"
          className="mx-auto my-[40px]"
          thickness={100}
          size={70}
        />
      ) : !loading && productFailed ? (
        <>
          <Modal show={modal} closeModal={() => setModal(false)}>
            <div
              className="bg-white  flex justify-center align-center p-2 z-10 w-80 fixed left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all ease-in-out duration-300 delay-100 top-[-100%]"
              style={{ top: modal && "50%" }}
            >
              {error}
            </div>
          </Modal>
          <p className="mt-2.5">Could not fetch products.</p>
        </>
      ) : (
        <>
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              productName={product.productName}
              productSize={product.size}
              productImg={product.productImg}
              productPrice={product.productPrice}
              productId={product._id}
              showInfo={showInfo}
              description={product.productDesc}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ProductCards;
