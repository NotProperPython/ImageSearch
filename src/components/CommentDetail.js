import React from "react";

const CommentDetail = ({ name, avatar, time, text }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {name}
        </a>
      </div>
      <div className="metadata">
        <span className="date">Today at {time}</span>
      </div>
      <div className="text">{text}</div>
    </div>
  );
};
export default CommentDetail;
