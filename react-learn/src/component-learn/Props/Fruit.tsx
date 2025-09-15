export default function Fruit() {
  // const fruits = ["banana", "mango", "orange", "pineaple"];

  const fruits = [
    {
      name: "banana",
      price: "12",
      emoji: "🍌",
      id: 1,
    },
    {
      name: "orange",
      price: "15",
      emoji: "🍊",
      id: 2,
    },
    {
      name: "mango",
      price: "20",
      emoji: "🥭",
      id: 3,
    },
  ];
  return (
    <div>
      {/* <ul>
        {fruits.map((fruits) => (
          <li key={fruits}>{fruits}</li>
        ))}
      </ul> */}

      <ul className="text-white">
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.emoji} {fruit.name} {fruit.price}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
