import { useReducer } from "react";
import { initialState } from "./cart/cart.initial";
import { cartReducer } from "./cart/cart.reducer";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <div>
      <h3>1. SHOPPING CART</h3>

      <h4>Product A</h4>

      {/* MENGUBAH HARGA */}
      <label>Pilih Harga : </label>
      <select
        value={state.price}
        onChange={(e) =>
          dispatch({ type: "SET_PRICE", payload: Number(e.target.value) })
        }
      >
        <option value="10000">10.000</option>
        <option value="20000">20.000</option>
        <option value="50000">50.000</option>
      </select>

      <p>Harga satuan : Rp. {state.price}</p>
      <div>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      </div>

      {state.error && <p style={{ color: "red" }}>{state.error}</p>}

      <h5>Total Bayar : Rp. {state.total}</h5>
      <button>Bayar Sekarang</button>
    </div>
  );
};
export default ShoppingCart;
