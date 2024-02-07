import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteComment } from "../store/commentSlice";

const CommmentList = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.comments);

  return (
    <div>
      <h1>Comment List</h1>
      {comments && comments.length && (
        <ol>
          {comments.map((comment, i) => (
            <li key={`${comment}-${i}`}>
              {comment}{" "}
              <button onClick={() => dispatch(deleteComment(i))}>Delete</button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default CommmentList;
