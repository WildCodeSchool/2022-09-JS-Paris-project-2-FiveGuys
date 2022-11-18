/* eslint-disable no-nested-ternary */
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

  return (
    <>
      <label htmlFor={fieldsToCheck.name}>{fieldsToCheck.label} : </label>
      <br />
      <div>
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
        <span className="spanValidation">
          {commentData[fieldsToCheck.name].isValid
            ? " ✓"
            : !commentData[fieldsToCheck.name].isValid &&
              commentData[fieldsToCheck.name].value
            ? "✕"
            : ""}
        </span>
        <br />
      </div>
      <div id="comment-controler">
        <span className="spanDisplayMsg">
          {commentData[fieldsToCheck.name].touched &&
            commentData[fieldsToCheck.name].displayMsg}
        </span>
        <br />
      </div>
      <button
        disabled={!commentData.commentArea.isValid}
        type="button"
        onClick={() => pushComment()}
      >
        Send
      </button>
    </>
  );
}

export default CommentArea;
