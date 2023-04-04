import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./PostDetail.css";

const PostDetail = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  //   console.log(post);
  const { id, title, userId, body } = post;
  return (
    <div>
      <h2>Details the post of id:{id}</h2>
      <h4>{title}</h4>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetail;
<h2>Here is the post of id:</h2>;
