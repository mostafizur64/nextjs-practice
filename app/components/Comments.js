import React from "react";

const Comments = async ({ promise }) => {
  const comments = await promise;
  return (
    <div>
      <div className="mt-10">
        <h1>Comments</h1>
        <ul>
          {comments.map((comment) => (
            <li className="mb-2" key={comment.id}>
              {comment.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comments;
