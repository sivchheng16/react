import { useReducer } from "react";

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment": {
      return {...state, count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    case "reset": {
      return { count: 0 };
    }
    default:
      return state;
  }
}
type State = {
  count: number;
};
type Action = { type: "increment" | "decrement" | "reset" };

export default function ReducerCounter() {
  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>count:{state.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}> reset</button>
    </div>
  );
}
