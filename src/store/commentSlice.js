import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "comment",
  initialState: { comments: [] },
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    updateComment: (state, action) => {
      const { id, newText } = action.payload;
      const commentToUpdate = state.comments.find(
        (comment) => comment.id === id
      );
      if (commentToUpdate) {
        commentToUpdate.text = newText;
      }
    },
    deleteComment: (state, action) => {
      const idToDelete = action.payload;
      state.comments = state.comments.filter(
        (comment, id) => id !== idToDelete
      );
    },
  },
});

export const { addComment, updateComment, deleteComment } =
  commentSlice.actions;

export default commentSlice.reducer;
