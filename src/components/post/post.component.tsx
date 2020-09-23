import React, { useState } from 'react';
import { IPost } from '../../types';
import './post.css';
import {Comments} from "../comments/comments.component";

type PostProps = {
  data: IPost,
};

export const Post: React.FC<PostProps> = ({ data }) => {
  const [showComments, setShowComments] = useState<boolean>(false);

  const toggleShowComments = () => {
    setShowComments(!showComments);
  }

  return (
    <div className="post-item">
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      <div className="post-item__comments">
        <div onClick={toggleShowComments} className="post-item__comments-toggle">
          {showComments ? 'Hide comments' : 'Show comments'}
        </div>
        {showComments && <Comments postId={data.id} />}
      </div>
    </div>
  );
};