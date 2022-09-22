import React, { useState } from "react";

const Usestate = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <button onClick={() => setCount(count + 1)}>+</button>
      <h2>{count}</h2>
      <button onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}>
        -
      </button>
    </div>
  );
};
export default Usestate;
