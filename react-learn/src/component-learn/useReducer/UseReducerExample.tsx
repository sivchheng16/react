import { useReducer } from "react";

// 1. The Reducer Function
// It takes the current state and an action, and returns the new state.

interface State {
  count: number;
}

type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }
  | { type: "SET_VALUE"; payload: number };

function counterReducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    case "SET_VALUE":
      // The 'payload' carries the data needed for the update.
      return { count: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}

function UseReducerExample() {
  // 2. Initializing the hook
  // useReducer takes the reducer function and the initial state.
  // It returns the current state and a dispatch function.
  const initialState: State = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <h1>useReducer Counter</h1>
        <p>Count: {state.count}</p>
        <div>
          {/* 3. Dispatching Actions */}
          {/* We call dispatch with an action object to trigger state updates. */}
          <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
          <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
          <button onClick={() => dispatch({ type: "SET_VALUE", payload: 100 })}>
            Set to 100
          </button>
        </div>
      </header>
    </div>
  );
}

export default UseReducerExample;
