import { useState } from "react";

export default function Form() {
  const [form, setform] = useState({
    firstName: "chheng",
    lastName: "coke",
    gmail: "chhengcoke@gmail.com",
  });
  return (
    <div className="app">
      <label>
        First Name
        <input
          type="text"
          onChange={(e) => {
            setform({ ...form, firstName: e.target.value });
          }}
        ></input>
      </label>

      <label>
        Last Name
        <input
          type="text"
          onChange={(e) => {
            setform({ ...form, lastName: e.target.value });
          }}
        />
      </label>

      <label>
        Gmail
        <input
          onChange={(e) => {
            setform({ ...form, gmail: e.target.value });
          }}
        ></input>
      </label>

      <div>
        {form.firstName} {form.lastName} {form.gmail}
      </div>
    </div>
  );
}
