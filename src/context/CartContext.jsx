import React, { createContext, useState } from "react";

export const ItemContext = createContext(null);

export const CartContext = ({children}) => {
    
    const [cart, setCart] = useState([]);        

    
    return (
        <ItemContext.Provider value={[cart, setCart]}>
            {children}
        </ItemContext.Provider>
    );
};






