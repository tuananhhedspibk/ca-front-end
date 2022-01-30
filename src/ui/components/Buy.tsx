import { useOrderProducts } from '../../application/orderProducts';

export function Buy() {
  // Get access to the use case in the component:
  const orderProducts = useOrderProducts();

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true);
    e.preventDefault();

    // Call the use case function:
    await orderProducts(user!, cart);
    setLoading(false);
  }

  return (
    <section>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>{/* ... */}</form>
    </section>
  );
}
