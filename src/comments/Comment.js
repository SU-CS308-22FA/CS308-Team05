import { useState } from "react";
import CommentForm from "./CommentForm";

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canDelete =
    currentUserId === comment.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();


  const [like,setLike] = useState(comment.likeCount);
  const [dislike,setDislike] = useState(comment.dislikeCount);
  const [activelike,setActiveLike] = useState(false);
  const [activedislike,setActiveDislike] = useState(false);
  function likef(){
    if(activelike){
      setActiveLike(false);
      setLike(like-1);
    }
    else{
      setActiveLike(true);
      setLike(like+1);
      if(activedislike){
        setActiveDislike(false);
        setLike(like+1);
        setDislike(dislike-1);
      }
    }



  }
  function dislikef(){
    if(activedislike){
      setActiveDislike(false);
      setDislike(dislike-1);
    }
    else{
      setActiveDislike(true);
      setDislike(dislike+1);
      if(activelike){
        setActiveLike(false);
        setLike(like-1);
        setDislike(dislike+1);
      }
    }



  }
  
  return (
    <div key={comment.id} className="comment">
      <div className="comment-image-container">
        <img src="/images/oco_2_6.jpeg" />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{createdAt}</div>
        </div>
        {!isEditing && 
          <div className="comment-text">{comment.body}
            <button className={[activelike? 'active-like':null,'button'].join(' ')} id="green" onClick={likef}><i class="fas fa-thumbs-up" aria-hidden="true"></i>Likes: {like}</button>
            <button className={[activedislike? 'active-dislike':null,'button'].join(' ')} id="red" onClick={dislikef}><i class="fas fa-thumbs-down" aria-hidden="true"></i>Dislikes: {dislike}</button>
          </div>
          
        }
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
