import React, { useState, useContext, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import ConnexionContext from "../contexts/connexionContext";
import { db } from "../firebase-config";
import CommentArea from "../components/CommentArea";
import Title from "../components/Title";
import UserComment from "../components/UserComment";
import "./Comments.css";

function Comments() {
  const { userInfo } = useContext(ConnexionContext);
  const { planet } = useParams();
  const [comments, setComments] = useState([]);

  const isAsc = useRef();
  const allComments = useRef();
  const isUserOnly = useRef();

  const getComments = async () => {
    const docref = doc(db, "comments", planet);
    await getDoc(docref).then((docu) => {
      setComments(docu.data().comments);
      allComments.current = doc.data().comments;
    });
  };

  const reverseCommentsOrder = () => {
    isAsc.current = !isAsc.current;
    setComments([...comments].reverse());
  };

  const userCommentsOnly = () => {
    isUserOnly.current = !isUserOnly.current;
    setComments(
      !isUserOnly.current
        ? comments.filter(
            (comment) => comment.id === userInfo.auth.currentUser.uid
          )
        : allComments.current
    );
  };

  useEffect(() => {
    isAsc.current = true;
    isUserOnly.current = false;
    getComments();
  }, []);

  return (
    <div className="page">
      <Title>Comments on {planet}</Title>
      <div id="comment-container">
        {!userInfo.auth.currentUser ? (
          <>
            <p>You have to be online to post comments</p>
            <Link to="/account/connexion">
              <button type="button">Log in</button>
            </Link>
          </>
        ) : (
          <CommentArea
            id={userInfo.auth.currentUser.uid}
            user={userInfo.info}
            planet={planet}
            setComments={setComments}
          />
        )}
      </div>
      <div id="dropdown">
        <div className="dropdown">
          <button type="button" className="dropbtn">
            Filter
          </button>
          <ul className="dropdown-content">
            <li>
              <button type="button" onClick={() => reverseCommentsOrder()}>
                filter {isAsc.current ? "ascending" : "descending"}
              </button>
            </li>
            {userInfo.auth.currentUser && (
              <li>
                <button type="button" onClick={() => userCommentsOnly()}>
                  {!isUserOnly.current ? "all" : "my comments"}
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Comments;
