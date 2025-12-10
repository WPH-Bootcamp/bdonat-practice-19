import { useReducer } from "react";

const initialState = { count: 0 };

type ActionType = { type: "INCREMENT" | "DECREMENT" | "RESET" };

function reducer(state: { count: number }, action: ActionType) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>2. Counter dengan Reducer</h1>

      <h3>Angka : {state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
};

export default CounterReducer;
