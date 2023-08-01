import React, { useState } from "react";
import Welcome from "./Welcome";
import UserInfoComponent from "./UserInfoComponent";
//rafce 입력
const ListComponent = () => {
  const [users, setUsers] = useState([
    { username: "홍길동", age: 12, major: "경영학" },
    { username: "고길동", age: 22, major: "회계학" },
    { username: "김길동", age: 32, major: "컴공" },
  ]);
  return (
    <div>
      {users.map((user) => {
        return (
          <>
            <Welcome userName={user.username} age={user.age}></Welcome>
            <UserInfoComponent name={user.username}></UserInfoComponent>
          </>
        );
      })}
    </div>
  );
};

export default ListComponent;
