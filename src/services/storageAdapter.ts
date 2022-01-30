import {
  CartStorageService,
  OrdersStorageService,
  UserStorageService,
} from '../application/ports';
import { useStore } from '../store';

export const useOrdersStorage = (): OrdersStorageService => {
  return useStore();
}

export const useCartStorage = (): CartStorageService => {
  return useStore();
}

export const useUserStorage = (): UserStorageService => {
  return useStore();
}
