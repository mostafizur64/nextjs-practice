import Comments from "@/app/components/Comments";
import getAllPosts from "@/lib/getAllPosts";
import getPostComments from "@/lib/getPostComment";
import getPost from "@/lib/getPosts";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);
  return {
    title: post.title,
    description: post.body,
  };
}

const PostPages = async ({ params }) => {
  const { id } = params;
  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);

  //   const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  // better way
  const post = await postPromise;

  return (
    <div className="mt-6">
      <h1 className="font-bold mb-4 text-2xl text-blue-500">{post.title}</h1>
      <p>{post.body}</p>

      <hr />
      <Suspense fallback="<h1>loading Comments .... </h1>">
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
};

export default PostPages;

export async function generateStaticParams() {
  const post = await getAllPosts();

  return post.map((post) => ({
    id: post.id.toString(),
  }));
}
