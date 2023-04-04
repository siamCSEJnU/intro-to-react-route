import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetail = () => {
  const friend = useLoaderData();
  const { name, phone } = friend;
  return (
    <div>
      <h2>Everything about this friend is here</h2>
      <h3>{name}</h3>
      <p>Phone : {phone}</p>
    </div>
  );
};

export default FriendDetail;
