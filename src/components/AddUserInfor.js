import React, { useState } from "react";

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("Binh Dinh");
  const [age, setAge] = useState("");

  const handleChangeInput = (event) => {
    setName(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!name || !age) {
      alert("Please enter both name and age");
      return;
    }
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 10001),
      name,
      age,
    });
  };

  return (
    <>
      My name is {name} and I'm {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name: </label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(event) => handleChangeInput(event)}
        />
        <label>Your age: </label>
        <input
          type="text"
          placeholder="Enter age"
          value={age}
          onChange={(event) => handleChangeAge(event)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};
export default AddUserInfor;
