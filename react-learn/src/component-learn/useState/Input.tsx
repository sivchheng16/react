import React from "react";

export default function Input() {
  const [name, setName] = React.useState("");

  return (
    <div>
      <input
        className="border mb-10 m-4 justify-center rounded-2xl pl-3"
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
        placeholder="search"
      />
    </div>
  );
}
