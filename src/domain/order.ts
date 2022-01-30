import { Cart } from './cart';
import { totalPrice } from './product';
import { User } from './user';

export type OrderStatus = 'new' | 'delivery' | 'completed';

export class Order {
  user: UniqueId;
  cart: Cart;
  created: DateTimeString;
  status: OrderStatus;
  total: PriceCents;

  constructor(user: User, cart: Cart) {
    this.user = user.id;
    this.cart = cart;
    this.created = new Date().toISOString();
    this.status = 'new';
    this.total = totalPrice(cart.products);
  }
}
