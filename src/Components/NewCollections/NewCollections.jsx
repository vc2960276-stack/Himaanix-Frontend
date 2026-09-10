import React, { useContext } from "react";
import "./NewCollections.css";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";

const NewCollections = () => {
  const { all_product } = useContext(ShopContext);

  // Show products marked as new
  const new_collection = all_product.filter(
    (item) => item.isNew === true
  );

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />

      <div className="collections">
        {new_collection.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;