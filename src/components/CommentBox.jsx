import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../store/commentSlice";

const CommentBox = () => {
  const dispatch = useDispatch();
  const [commentForm, setCommentForm] = useState({ comment: "" });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setCommentForm({ ...commentForm, [name]: value });
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();

    dispatch(addComment(commentForm.comment));
  };

  return (
    <div>
      <form onSubmit={handleSubmitButton}>
        <h4>Add a Comment</h4>
        <textarea
          name="comment"
          onChange={handleInputChange}
          value={commentForm.comment}
        />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    </div>
  );
};

export default CommentBox;
