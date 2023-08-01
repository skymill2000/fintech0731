import { useState } from "react";

const InputComponent = () => {
  const handleClick = () => {
    console.log("클릭");
  };

  const handleChange = () => {
    console.log("변경");
  };

  return (
    <div>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>입력</button>
    </div>
  );
};

export default InputComponent;
