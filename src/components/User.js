import React, { Component } from "react";

export class User extends Component {
  render() {
    const { avatar_url, login, html_url } = this.props.user;

    return (
      <div className='col-sm-4'>
        <div className='card mb-3'>
          <div className='card-body'>
            <div className='row g-0'>
              <div className='col-md-4'>
                <img src={avatar_url} className='img-fluid rounded-start avatar' alt={login} />
              </div>
              <div className='col-md-8'>
                <div className='card-body'>
                  <h5 className='card-title'>{login}</h5>
                  <hr />
                  <a target='_blank' href={html_url} className='btn btn-primary' rel='noreferrer'>
                    Github Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
