import React from "react";
import "./UserComment.css";

function UserComment({ commentData }) {
  return (
    <div className="comment">
      {commentData ? (
        <>
          <div className="comment-header">{commentData.name} wrote :</div>
          <div className="comment-body">{commentData.data}</div>
          <div className="comment-footer">{commentData.date}</div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default UserComment;
