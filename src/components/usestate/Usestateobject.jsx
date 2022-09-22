import React, { useState } from "react";

const Usestateobject = () => {
  return (
    <div className="container">
      <h3>Registration Form</h3>
      <form>
        <p>
          <input type="text" name="name" id="name" placeholder="Enter name" />
        </p>
        <p>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
        </p>
        <p>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter Phone"
          />
        </p>
        <p>
          <input type="submit" name="submit" />
        </p>
      </form>
      <p>My Name is : , My Email Address : , My Phone Number is : </p>
    </div>
  );
};

export default Usestateobject;
