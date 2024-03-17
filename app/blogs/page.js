import Link from "next/link";
import React from "react";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Blog 1 description",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Blog 2 description",
    },
  ];
  return (
    <main className="mt-10">
      <ul>
        {blogs.map((blog, index) => (
          <li className="mb-4" key={index}>
            <Link href={`/blogs/${blog.id}`}> {blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blogs;
