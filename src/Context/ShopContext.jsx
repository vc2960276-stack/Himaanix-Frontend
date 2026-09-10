import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let index = 0; index <= 300; index++) {
    cart[index] = 0;
  }

  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Load products from local JSON
  useEffect(() => {
    fetch("/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load products: ${res.status}`);
        }

        return res.json();
      })
      .then((data) => {
        console.log("Products loaded:", data);

        // Convert JSON structure to your existing app structure
        const products = data.products.map((product) => ({
          ...product,
          new_price: product.price,
          old_price: product.oldPrice,
        }));

        setAll_Product(products);
      })
      .catch((error) => {
        console.error("Error loading products.json:", error);
      });

    // Load cart if user is logged in
    if (localStorage.getItem("auth-token")) {
      fetch("https://shubhvika-backend.vercel.app/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": localStorage.getItem("auth-token"),
          "content-type": "application/json",
        },
        body: "",
      })
        .then((res) => res.json())
        .then((data) => setCartItems(data))
        .catch((error) => {
          console.error("Error loading cart:", error);
        });
    }
  }, []);

  // Add product to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));

    if (localStorage.getItem("auth-token")) {
      fetch("https://shubhvika-backend.vercel.app/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": localStorage.getItem("auth-token"),
          "content-type": "application/json",
        },
        body: JSON.stringify({
          itemId: itemId,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
  };

  // Remove product from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));

    if (localStorage.getItem("auth-token")) {
      fetch("https://shubhvika-backend.vercel.app/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": localStorage.getItem("auth-token"),
          "content-type": "application/json",
        },
        body: JSON.stringify({
          itemId: itemId,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
  };

  // Calculate total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );

        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }

    return totalAmount;
  };

  // Calculate total cart items
  const getTotalCartItems = () => {
    let totalItem = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }

    return totalItem;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;