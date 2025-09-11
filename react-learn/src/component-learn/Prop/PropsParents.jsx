import PropsChile from "./PropsChile";

import { useState } from "react";

const PropsParemts = (props) => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "Chheng",
      id: 1,
    },
    { title: "Welcome party!", body: "lorem ipsum...", author: "Mey", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "Chheng",
      id: 3,
    },
  ]);
  return (
    <div className="props-pearent">
      <PropsChile blogs={blogs.title} />
    </div>
  );
};
export default PropsPearent;
