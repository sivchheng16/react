export default function ({
  name,
  age,
  emoji,
  array,
}: {
  name: any;
  age: any;
  emoji: any;
  array: any;
}) {
  return (
    <div>
      <h1>
        {name}
        {age}
        {emoji}
        {array}
      </h1>
    </div>
  );
}
