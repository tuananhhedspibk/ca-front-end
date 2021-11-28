import { Product } from './product';

export type Cart = {
  products: Product[];
}

export const addProduct = (cart: Cart, product: Product): Cart => {
  return { ...cart, products: [...cart.products, product] };
}

export const contains = (cart: Cart, product: Product): boolean => {
  return cart.products.some(({ id }) => id === product.id);
}
