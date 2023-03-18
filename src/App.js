import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import React, { Component } from "react";
import Search from "./components/Search";
import Alert from "./components/Alert";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
      alert: null,
      userFollowers: [],
    };
  }

  searchUsers = (keyword) => {
    this.setState({ loading: true });

    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            users: data.items,
            loading: false,
          })
        );
    }, 1000);
  };

  clearResult = () => {
    this.setState({ users: [] });
  };

  showAlert = (message, type) => {
    this.setState({
      alert: { message: message, type: type },
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Search
          searchUsers={this.searchUsers}
          clearResult={this.clearResult}
          showClearBtn={this.state.users.length > 0 ? true : false}
          showAlert={this.showAlert}
        />
        <Alert alert={this.state.alert} />
        <div className='container'>
          <UserList users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
