import React, { useContext, useState } from 'react';
import { cookies } from './fakeData';

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider: React.FC = ({ children }) => {
  const [user, setUser] = useState();
  const [cart, setCart] = useState({ products: [] });
  const [orders, setOrders] = useState([]);

  const value = {
    user,
    cart,
    orders,
    cookies,
    updateUser: setUser,
    updateCart: setCart,
    updateOrders: setOrders,
    emptyCart: () => setCart({ products: [] }),
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  )
}
