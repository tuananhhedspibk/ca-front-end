import { Cart } from '../domain/cart';
import { Order } from '../domain/order';
import { User } from '../domain/user';
import { useNotifier } from '../services/notificationAdapter';
import { usePayment } from '../services/paymentAdapter';
import { useCartStorage, useOrdersStorage } from '../services/storageAdapter';
import {
  CartStorageService,
  NotificationService,
  OrdersStorageService,
  PaymentService,
} from './ports';

type OrderProductDependencies = {
  payment: PaymentService;
  notifier: NotificationService;
  orderStorage: OrdersStorageService;
  cartStorage: CartStorageService;
};

const orderProducts = async (
  user: User,
  cart: Cart,
  dependencies: OrderProductDependencies,
) => {
  const {
    payment,
    notifier,
    orderStorage,
    cartStorage,
  } = dependencies;
  const order = new Order(user, cart);
  
  const paid = await payment.tryPay(order.total);
  if (!paid) return notifier.notify('Ooops!! 🤷');

  const { orders } = orderStorage;
  orderStorage.updateOrders([...orders, order]);
  cartStorage.emptyCart();
}

export const useOrderProducts = () => {
  const payment: PaymentService = usePayment();
  const notifier: NotificationService = useNotifier();
  const orderStorage: OrdersStorageService = useOrdersStorage();
  const cartStorage: CartStorageService = useCartStorage();

  return (user: User, cart: Cart) => (
    orderProducts(user, cart, {
      payment,
      notifier,
      orderStorage,
      cartStorage,
    })
  );
}
