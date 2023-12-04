import React, { useState } from "react";
import "./AddUser.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [enteredUserCollege, setEnteredUserCollege] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredUserCollege.trim().length === 0
    ) {
      return;
    }

    if (enteredUserAge < 1) {
      return;
    }

    // Call the parent component's onAddUser function
    props.onAddUser(enteredUserName, enteredUserAge, enteredUserCollege);

    // Optionally, you can clear the input fields after adding the user
    setEnteredUserName("");
    setEnteredUserAge("");
    setEnteredUserCollege('');
  };

  const usernameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };
  const userCollegeHandler = (event) => {
    setEnteredUserCollege(event.target.value);
  }

  return (
    <form className="App" onSubmit={addUserHandler}>
      <label htmlFor="username" className="label1">
        Username:
      </label>
      <input
        id="username"
        type="text"
        value={enteredUserName}
        onChange={usernameHandler}
      />
      <label htmlFor="age" className="label2">
        Age (Years):
      </label>
      <input
        id="age"
        type="number"
        value={enteredUserAge}
        onChange={userAgeHandler}
      />
      <label htmlFor="collegeName">College :</label>
      <input id="college"
      type="text"
      value={enteredUserCollege}
      onChange={userCollegeHandler}
      />
      <button type="submit" className="button">
        Add User
      </button>
    </form>
  );
};

export default AddUser;
