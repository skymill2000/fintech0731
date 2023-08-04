import React, { useState } from "react";
import AppHeader from "../components/common/AppHeader";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeId = (e) => {
    setId(e.target.value);
  };
  const handleChangePassword = (e) => {
    // setUserInfo(...userInfo, {
    //   password: e.target.value,
    // });
    setPassword(e.target.value);
  };
  const handleClick = () => {
    console.log(id, password);
  };
  return (
    <div>
      <AppHeader title={"로그인"}></AppHeader>
      <div>
        id : <input onChange={handleChangeId}></input>
        password :{" "}
        <input type="password" onChange={handleChangePassword}></input>
        <button onClick={handleClick}>검색</button>
      </div>
    </div>
  );
};

export default LoginPage;
