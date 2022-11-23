import React, { useState } from "react";
import "./CommentArea.css";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase-config";
import FormFields from "../connexionHelpers/formFields";
import FormHelpers from "../connexionHelpers/formHelpers";

function CommentArea({ id, user, planet, setComments }) {
  const { name, surname } = user;

  const { commentArea } = FormFields;
  const [commentData, setComment] = useState({
    commentArea,
  });
  const [fieldsToCheck] = Object.values(commentData);

  const pushComment = async () => {
    const docRef = doc(db, "comments", planet);
    const newComment = {
      name: surname.concat(" ", name),
      data: commentData.commentArea.value,
      date: "today",
      id,
    };
    await updateDoc(
      docRef,
      {
        comments: arrayUnion(newComment),
      },
      { merge: true }
    );
    setComments((old) => [...old, newComment]);
  };

  const displayValidation = () => {
    switch (true) {
      case commentData[fieldsToCheck.name].isValid:
        return " ✓";
      case !commentData[fieldsToCheck.name].isValid &&
        commentData[fieldsToCheck.name].value:
        return " ✕";
      default:
        return undefined;
    }
  };

  return (
    <div className="comment-area">
      <label htmlFor={fieldsToCheck.name}>{fieldsToCheck.label} : </label>
      <div className="textarea-container">
        <textarea
          placeholder="type your comment"
          id={fieldsToCheck.name}
          type="text"
          name={fieldsToCheck.name}
          onFocus={(e) =>
            FormHelpers.handleBlur(e, commentData, setComment, false)
          }
          onChange={(e) =>
            FormHelpers.handleChange(e, commentData, setComment, false)
          }
        />
        <span className="spanValidation">{displayValidation()}</span>
      </div>
      <div id="comment-controler">
        <span className="spanDisplayMsg">
          {commentData[fieldsToCheck.name].touched &&
            commentData[fieldsToCheck.name].displayMsg}
        </span>
      </div>
      <button
        disabled={!commentData.commentArea.isValid}
        type="button"
        onClick={() => pushComment()}
      >
        Send
      </button>
    </div>
  );
}

export default CommentArea;