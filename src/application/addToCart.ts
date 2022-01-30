import { addProduct } from '../domain/cart';
import { Product } from '../domain/product';
import { hasAllergy, User } from '../domain/user';
import { useNotifier } from '../services/notificationAdapter';
import { useCartStorage } from '../services/storageAdapter';
import { CartStorageService, NotificationService } from './ports';

type AddToCartDependencies = {
  storage: CartStorageService;
  notifier: NotificationService;
}

const addToCart = (
  user: User,
  product: Product,
  dependencies: AddToCartDependencies,
) => {
  const { storage, notifier } = dependencies;
  const warning = 'This cookie is dangerous for your health!';
  const isDangerous = product.toppings.some(item => hasAllergy(user, item));

  if (isDangerous) return notifier.notify(warning);

  const { cart } = storage;
  const updated = addProduct(cart, product);
  storage.updateCart(updated);
}

export const useAddToCart = () => {
  const storage = useCartStorage();
  const notifier = useNotifier();

  return (user: User, product: Product) => (
    addToCart(user, product, { storage, notifier })
  )
}
