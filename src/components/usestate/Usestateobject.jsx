import React, { useState } from "react";

const UseStateObject = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",=
  });
  
  const handleInput = (event) => {
    const name = event.target.name;

    const value = event.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  
  return (
    <div className="container">
      <h3>Registration Form</h3>
      <form>
        <p>
          <input type="text" name="name" id="name" placeholder="Enter name" value={formData.name} onChange={handleInpur} />
        </p>
        <p>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleInpur}
          />
        </p>
        <p>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleInpur}
          />
        </p>
        <p>
          <input type="submit" name="submit" />
        </p>
      </form>
      <p>{`My Name is : ${formData.name}, My Email Address : ${formData.email}, My Phone Number is : ${formData.phone}`}</p>
    </div>
  );
};

export default Usestateobject;
