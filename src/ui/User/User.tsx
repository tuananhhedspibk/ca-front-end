import React from 'react';
import { Navigate } from 'react-router';
import { useUserStorage } from '../../services/storageAdapter';
import { Buy } from '../Buy';
import { Cart } from '../Cart';
import { Orders } from '../Orders';
import { Profile } from '../Profile';

export const User: React.FC = () => {
  const { user } = useUserStorage();
  if (!user) return <Navigate replace to="/auth" />;

  return (
    <main>
      <Profile />
      <Orders />
      <Cart />
      <Buy />
    </main>
  );
}
