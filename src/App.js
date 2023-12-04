import React, { Fragment, useState } from "react";
import AddUser from "./Components/AddUser";
import UserList from "./UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (userName, userAge, userCollege) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: userName, age: userAge, college: userCollege },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} /> {/* Remove the extra square brackets */}
    </Fragment>
  );
}

export default App;
