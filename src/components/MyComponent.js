import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";


const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "John Doe", age: 16 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 3, name: "Alice Johnson", age: 28 },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    const newListUsers = listUsers.filter((user) => user.id !== userId);
    setListUsers(newListUsers);
  };
  return (
    <>
      <br />
      <div>
        <AddUserInfor 
          handleAddNewUser = {handleAddNewUser}
        />
        <br /><br />
        <DisplayInfor 
          listUsers = {listUsers}
          handleDeleteUser = {handleDeleteUser}
        />
      </div>
    </>
  );
};
export default MyComponent;
