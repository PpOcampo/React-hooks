import React, { useState } from "react";
import useInput from "../hooks/useInput";

const UserForm = () => {
  const [firstName, resetFirstName, firstNameProps] = useInput("");

  const [lastName, resetLastName, lastNameProps] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hola ${firstName} ${lastName}`);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input type="text" {...firstNameProps} />
          <label>Last Name</label>
          <input type="text" onChange={lastNameProps.onChange} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
