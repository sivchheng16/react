import { useState } from "react";

const OutputList = () => {
  const [blogs, setblogs] = useState([
    {
      id: 1,
      tittle: "My ouptput list",
      body: "This is my output list",
      auhur: "Chheng",
    },
    {
      id: 2,
      tittle: "My ouptput list2",
      body: "This is my output list2",
      auhur: "John",
    },
    {
      id: 3,
      tittle: "My ouptput list3",
      body: "This is my output list3",
      auhur: "Doe",
    },
  ]);

  return (
    <div className="p-4 border rounded-md mt-4">
      {blogs.map((blog) => (
        <div key={blog.id} className="mb-4 p-4 border rounded-md">
          <h2 className="text-xl font-bold mb-2">{blog.tittle}</h2>
          <p className="mb-2">{blog.body}</p>
          <p className="text-sm text-gray-500">Author: {blog.auhur}</p>
        </div>
      ))}
    </div>
  );
};

export default OutputList;
