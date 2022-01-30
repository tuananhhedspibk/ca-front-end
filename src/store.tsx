import React, { useContext, useState } from 'react';

const StoreContext = React.createContext<any>({});

export const useStore = () => useContext(StoreContext);

export const Provider: React.FC = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState();
  const [cart, setCart] = useState({ products: [] });

  const value = {
    orders,
    user,
    cart,
    updateOrders: setOrders,
    updateUser: setUser,
    updateCart: setCart,
    emptyCart: () => setCart({ products: [] }),
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
}
