import React, { Component } from "react";
import Loading from "./Loading";
import User from "./User";

export class UserList extends Component {
  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <div className='row'>
        {this.props.users.map((user, index) => (
          <User user={user} key={index} />
        ))}
      </div>
    );
  }
}

export default UserList;
