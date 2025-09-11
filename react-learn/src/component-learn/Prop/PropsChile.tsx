const blogList = (props) => {
const blogs = props.blogs;

  return (
    <div className="">
      {blogs.map((blog) => (
        <div key={blog.id} className="p-4 border rounded-md mt-4">
          <h2 className="text-xl font-bold mb-2">{blog.tittle}</h2>
          <p className="mb-2">{blog.body}</p>
          <p className="text-sm text-gray-500"> write by:{blog.auhur}</p>
        </div>
      ))}
    </div>
    // <div className="p-4 border rounded-md mt-4">
    //   {blogs.map((blog) => (

    //     <div key={blog.id}>
    //       <h2>{blog.tittle}</h2>
    //       <p>{blog.body}</p>
    //       <p> write by:{blog.auhur}</p>
    //     </div>
    //   ))}
    // </div>
  );
};

export default blogList;
