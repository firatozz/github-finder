import React, { useContext, useState } from "react";
import { UsersContext } from "./../context/usersContext";
import { AlertContext } from "./../context/alertContext";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const { searchUsers, users, clearResult } = useContext(UsersContext);
  const { showAlert } = useContext(AlertContext);

  const onChange = (e) => {
    setKeyword(e.target.value);

    if (e.target.value.length > 0 && e.target.value.length < 3) {
      showAlert("You must enter at least 3 characters to search..", "warning");
    } else {
      showAlert(null);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (keyword === "") {
      showAlert("You must enter text to search.", "danger");
    } else {
      searchUsers(keyword);
      setKeyword("");
    }
  };

  return (
    <div className='container my-3'>
      <form onSubmit={onSubmit}>
        <div className='input-group'>
          <input type='text' className='form-control' placeholder='Search User' value={keyword} onChange={onChange} />
          <button className='btn btn-outline-secondary' type='submit' id='button-addon2'>
            Search
          </button>
        </div>
      </form>
      {users.length > 0 && (
        <button onClick={clearResult} className='btn btn-outline-danger mt-2 btn-block w-100'>
          Clear Search
        </button>
      )}
    </div>
  );
};

export default Search;
