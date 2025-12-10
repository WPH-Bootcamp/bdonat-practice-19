export type CartItemState = {
  qty: number;
  price: number;
  total: number;
  error: string | null;
};

export type CartAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "SET_PRICE"; payload: number };
