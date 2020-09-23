import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../types';
import './user.css';

type UserProps = {
  data: IUser,
};

export const User: React.FC<UserProps> = ({ data }) => {
  return (
    <div className="user-item">
      <h2>@{data.username}</h2>
      <div className="user-item__field">Name: {data.name}</div>
      <div className="user-item__field">Email: {data.email}</div>
      <div className="user-item__field">
        Website: <a href={data.website} target="_blank" rel="noopener noreferrer">{data.website}</a>
      </div>
      <Link to={`/user/${data.id}`} className="btn">
        Show posts
      </Link>
    </div>
  );
};
