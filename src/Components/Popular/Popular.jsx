import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        console.log("JSON DATA:", data);
        setPopularProducts(data.products);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
      });
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />

      <div className="popular-item">
        {popularProducts.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.price}
              old_price={item.oldPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;