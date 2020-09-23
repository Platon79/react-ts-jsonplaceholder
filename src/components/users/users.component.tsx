import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { getUsers } from '../../store/actions/users.actions';
import { IUsersState } from '../../store/reducer/users.reducer';
import Loader from '../loader';
import User from '../user';
import { IUser } from '../../types';
import './users.css';

const mapStateToProps = (store: {users: IUsersState}) => ({
  users: store.users.list,
  loader: store.users.loader,
});

const mapDispatchToProps = {
  getUsers,
};

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

const Users:React.FC<PropsFromRedux> = ({ users, loader, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const template = (jsx: JSX.Element) => (
    <>
      <h1>Users</h1>
      {jsx}
    </>
  );

  if (loader) {
    return template(<Loader />);
  }

  return template(
    <div className="users-list">
      {users.map((user: IUser) => (
        <User data={user} key={user.id} />
      ))}
    </div>
  );
};

export default connector(Users);