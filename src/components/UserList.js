import React, { useContext } from "react";
import Loading from "./Loading";
import User from "./User";
import { UsersContext } from "./../context/usersContext";

const UserList = () => {
  const { loading, users } = useContext(UsersContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className='row'>
      {users.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </div>
  );
};

export default UserList;
