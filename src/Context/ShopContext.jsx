import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const ShopContext = createContext(null);
export const useShop = () => useContext(ShopContext);

const CART_KEY = "hx_cart";
const WISH_KEY = "hx_wishlist";

const readLS = (k, fb) => {
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch { return fb; }
};

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => readLS(CART_KEY, []));
  const [wishlist, setWishlist] = useState(() => readLS(WISH_KEY, []));
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem(WISH_KEY, JSON.stringify(wishlist)); }, [wishlist]);

  const addToCart = (product, { size, color, quantity = 1 } = {}) => {
    setCart((prev) => {
      const key = `${product.id}|${size || ""}|${color || ""}`;
      const idx = prev.findIndex((it) => it.key === key);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + quantity };
        return next;
      }
      return [
        ...prev,
        {
          key,
          product_id: product.id,
          name: product.name,
          price: product.price,
          old_price: product.old_price,
          category: product.category,
          image: product.images?.[0] || null,
          size: size || null,
          color: color || null,
          quantity,
        },
      ];
    });
    setCartOpen(true);
  };

  const updateQty = (key, quantity) => {
    setCart((prev) => prev.map((it) => (it.key === key ? { ...it, quantity: Math.max(1, quantity) } : it)));
  };

  const removeItem = (key) => setCart((prev) => prev.filter((it) => it.key !== key));
  const clearCart = () => setCart([]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) return prev.filter((p) => p.id !== product.id);
      return [...prev, { id: product.id, name: product.name, price: product.price, category: product.category }];
    });
  };

  const inWishlist = (id) => !!wishlist.find((p) => p.id === id);

  const totals = useMemo(() => {
    const subtotal = cart.reduce((s, it) => s + it.price * it.quantity, 0);
    const shipping = subtotal >= 2999 ? 0 : subtotal > 0 ? 149 : 0;
    return { subtotal, shipping, total: subtotal + shipping, count: cart.reduce((s, it) => s + it.quantity, 0) };
  }, [cart]);

  return (
    <ShopContext.Provider
      value={{
        cart, wishlist, cartOpen, setCartOpen,
        addToCart, updateQty, removeItem, clearCart,
        toggleWishlist, inWishlist, totals,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
