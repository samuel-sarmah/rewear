import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addToCart = (products) => {
        setItems(prev => {
            const existing = prev.find(i => i.id === products.id);
            if(existing) {
                return prev.map(i => 
                    i.id === products.id
                    ? { ...i, quantity: i.quantity + 1}
                    : i
                );
            }
            return [...prev, { ...products, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setItems(prev => prev.filter(i => i.id !== id));
    };

    const cartTotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, cartTotal, cartCount }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);