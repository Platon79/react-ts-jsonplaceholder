import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IPost } from '../../types';
import { IPostsState } from '../../store/reducer/posts.reducer';
import { getPosts } from '../../store/actions/posts.actions';
import Loader from '../loader';
import Post from '../post';
import './posts.css';

type TParams = {
  userId: string,
}

const mapStateToProps = (store: {posts: IPostsState}) => ({
  posts: store.posts.list,
  loader: store.posts.loader,
});

const mapDispatchToProps = {
  getPosts,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

const Posts: React.FC<PropsFromRedux> = ({ loader, posts, getPosts }) => {
  const params: TParams = useParams(); // ??? can I take param using destructuring
  
  useEffect(() => {
    debugger
    getPosts(params.userId);
  }, [getPosts, params.userId]);

  const template = (jsx: any) => (
    <>
      <h1>User posts</h1>
      {jsx}
    </>
  );

  if (loader) {
    return template(<Loader />);
  }

  return template(
    <div className="posts-list">
      {posts.map((post: IPost) => (
        <Post data={post} key={post.id} />
      ))}
    </div>
  );
};

export default connector(Posts);
