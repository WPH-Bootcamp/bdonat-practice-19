import type { CartAction, CartItemState } from "./types/cart.types";
import {
  handleDecrement,
  handleIncrement,
  handleSetPrice,
} from "./cart.handlers";

export function cartReducer(state: CartItemState, action: CartAction) {
  switch (action.type) {
    case "INCREMENT":
      return handleIncrement(state);
    case "DECREMENT":
      return handleDecrement(state);
    case "SET_PRICE":
      return handleSetPrice(state, action.payload);
    default:
      return state;
  }
}
