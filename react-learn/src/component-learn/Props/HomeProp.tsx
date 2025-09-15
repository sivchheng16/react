import ChildProp from "../ChildProp";
import Fruit from "./Fruit";

export default function HomeProp() {
  const array = [1, 2, 3];
  return (
    <div className="app">
      <ChildProp name="hello word" age="19" emoji="🤪" array={array} />
      <Fruit />
    </div>
  );
}
