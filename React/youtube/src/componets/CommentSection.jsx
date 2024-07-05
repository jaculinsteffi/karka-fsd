import React, { useState } from "react";
import { SlLike } from "react-icons/sl";
const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (commentText.trim() === "") return;
    setComments([...comments, { id: Date.now(), text: commentText }]);
    setCommentText("");
  };

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };
  const likeComment = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };
  return (
    <div className="cmnt">
      <form onSubmit={handleCommentSubmit}>
        <input
          typeof="text"
          value={commentText}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
        />
        <button type="submit" className="button">
          Comment
        </button>
      </form>
      <div>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            deleteComment={deleteComment}
            likeComment={likeComment}
          />
        ))}
      </div>
    </div>
  );
};

const Comment = ({ likeComment, comment, deleteComment }) => {
  return (
    <div className="cmntsec">
      <div>
        <p>{comment.text}</p>
      </div>
      <div className="cmntbtn">
        <button onClick={() => likeComment(comment.id)}>
          <SlLike />
          {comment.likes}
        </button>
        <button onClick={() => deleteComment(comment.id)}>Delete</button>
        <button>Reply</button>
      </div>
    </div>
  );
};

export default CommentSection;
