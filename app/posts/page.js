import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import React from "react";

const Posts = async () => {
  const posts = await getAllPosts();


  return (
    <div className="mt-6">
      <h1>All Posts</h1>
      <ul className="mt-6">
        {posts.map((post) => (
          <li className="mb-2" key={post.id}>
         <Link className="cursor-pointer" href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
