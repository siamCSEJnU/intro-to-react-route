import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="post">
      <h3>ID :{id}</h3>
      <h4>{title}+</h4>
      <p>{body}</p>
      <Link to={`/post/${id}`}>Show Details</Link>
      <Link to={`/post/${id}`}>
        <button>Show Post Details</button>
      </Link>
      <button onClick={handleNavigation}>With Button Handleer</button>
    </div>
  );
};

export default Post;
