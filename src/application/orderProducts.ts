import { Cart } from '../domain/cart';
import { Order } from '../domain/order';
import { User } from '../domain/user';
import {
  CartStorageService,
  NotificationService,
  OrdersStorageService,
  PaymentService,
} from './ports';

const payment: PaymentService = {};
const notifier: NotificationService = {};
const orderStorage: OrdersStorageService = {};
const cartStorage: CartStorageService = {};

const orderProducts = async (user: User, cart: Cart) => {
  const order = new Order(user, cart);
  
  const paid = await payment.tryPay(order.total);
  if (!paid) return notifier.notify('Ooops!! 🤷');

  const { orders } = orderStorage;
  orderStorage.updateOrders([...orders, order]);
  cartStorage.emptyCart();
}
