import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };
  }

  onChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
    if (e.target.value.length > 0 && e.target.value.length < 3) {
      this.props.showAlert("You must enter at least 3 characters to search..", "warning");
    } else {
      this.props.showAlert("", "");
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.keyword === "") {
      this.props.showAlert("You must enter text to search.", "danger");
    } else {
      this.props.searchUsers(this.state.keyword);
      this.setState({ keyword: "" });
    }
  };

  render() {
    return (
      <div className='container my-3'>
        <form onSubmit={this.onSubmit}>
          <div className='input-group'>
            <input type='text' className='form-control' placeholder='Search User' value={this.state.keyword} onChange={this.onChange} />
            <button className='btn btn-outline-secondary' type='submit' id='button-addon2'>
              Search
            </button>
          </div>
        </form>
        {this.props.showClearBtn && (
          <button onClick={this.props.clearResult} className='btn btn-outline-danger mt-2 btn-block w-100'>
            Clear Search
          </button>
        )}
      </div>
    );
  }
}

export default Search;
