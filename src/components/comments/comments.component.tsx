import React, { useEffect, useState } from 'react';
import { IComment } from "../../types";
import {fetchPostComments} from "../../api/api";
import {Loader} from "../loader/loader.component";
import './comments.css';

type TProps = {
  postId: number
}

export const Comments: React.FC<TProps> = ({postId}) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    fetchPostComments(String(postId))
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  if (loader) {
    return <Loader />
  }

  return (
    <div className="comments-list">
      {comments.map((comment) => (
        <>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </>
      ))}
    </div>
  );
};