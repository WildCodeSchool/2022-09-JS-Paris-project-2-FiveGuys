import React from "react";
import "./UserComment.css";

function UserComment({ commentData }) {
  return (
    <div className="comment">
      {commentData ? (
        <>
          <div className="comment-header">{commentData.name} wrote :</div>
          <div className="comment-body">
            <i>{commentData.data}</i>
          </div>
          <div className="comment-footer">
            <b>{commentData.date}</b>
          </div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default UserComment;
