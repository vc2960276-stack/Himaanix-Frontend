import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product?.find(
    (e) => Number(e.id) === Number(productId)
  );

  // Product data is not available yet
  if (!all_product || all_product.length === 0) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        Loading product...
      </div>
    );
  }

  // Product ID doesn't exist
  if (!product) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2>Product Not Found</h2>
        <p>Product ID: {productId}</p>
      </div>
    );
  }

  return (
    <div>
      <Breadcrum product={product} />

      <ProductDisplay product={product} />

      <DescriptionBox />

      <RelatedProducts />
    </div>
  );
};

export default Product;