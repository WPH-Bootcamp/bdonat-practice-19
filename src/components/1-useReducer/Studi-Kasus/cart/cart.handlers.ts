import type { CartItemState } from "./types/cart.types";

export const handleIncrement = (state: CartItemState) => {
  const newQty = state.qty + 1;
  return {
    ...state,
    qty: newQty,
    total: newQty * state.price,
    error: null,
  };
};
export const handleDecrement = (state: CartItemState) => {
  if (state.qty <= 1) return { ...state, error: "Minimal Pembelian 1 item" };

  const newQty = state.qty - 1;
  return {
    ...state,
    qty: newQty,
    total: newQty * state.price,
    error: null,
  };
};
export const handleSetPrice = (
  state: CartItemState,
  price: number
): CartItemState => {
  return {
    ...state,
    price: price,
    total: state.qty * price,
  };
};
