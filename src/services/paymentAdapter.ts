import { fakeApi } from './api';
import { PaymentService } from '../application/ports';

export const usePayment = (): PaymentService => {
  return {
    tryPay(amount: PriceCents) {
      return fakeApi(true);
    }
  }
}
