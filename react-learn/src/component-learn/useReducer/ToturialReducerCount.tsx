import { useReducer } from "react";
interface State {
  count: number;

  error: string | null;
}
interface Action {
  type: "increment" | "decrement" | "reset";
}

function reducer(state: State, action: Action) {
  const type = action.type;
  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = state.count > 5;

      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "maximoum reached" : null,
      };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = state.count < 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "minimoum" : null,
      };
    }

    default:
      return state;
  }
}
export default function ToturialReducerCounter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });
  return (
    <div>
      <h1>Count: {state.count}</h1>
      {state.error && <div>{state.error}</div>}
      <button
        className="button"
        onClick={() => dispatch({ type: "increment" })}
      >
        increment
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: "decrement" })}
      >
        decrement
      </button>
    </div>
  );
}
