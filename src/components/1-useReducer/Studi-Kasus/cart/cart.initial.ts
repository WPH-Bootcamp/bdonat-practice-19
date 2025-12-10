import type { CartItemState } from "./types/cart.types";

export const initialState: CartItemState = {
  qty: 1,
  price: 10_000,
  total: 10_000,
  error: null,
};
