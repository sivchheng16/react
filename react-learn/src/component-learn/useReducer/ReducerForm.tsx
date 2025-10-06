import { useReducer } from "react";
interface State {
  name: string;
  age: number;
}
type Action =
  | { type: "UPDATETEXT"; payload: string }
  | { type: "UPDATEAGE"; payload: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "UPDATETEXT": {
      return { ...state, name: action.payload };
    }
    case "UPDATEAGE": {
      return { ...state, age: action.payload };
    }
    default:
      return state;
  }
};

export default function ReducerForm() {
  const initialState: State = { name: "", age: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <form>
      <label>
        Name:
        <input
          className="border"
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "UPDATETEXT", payload: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Age:
        <input
          className="border"
          type="number"
          value={state.age}
          onChange={(e) =>
            dispatch({ type: "UPDATEAGE", payload: e.target.valueAsNumber })
          }
        />
      </label>
      <h1>
        Hello {state.name} {state.age} yeara old
      </h1>
    </form>
  );
}
