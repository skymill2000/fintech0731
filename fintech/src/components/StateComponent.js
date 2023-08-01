import { useState } from "react";

const StateComponent = () => {
  let [username, setUserName] = useState("홍길동");
  setInterval(() => {
    setUserName("고길동");
    console.log(username);
  }, 5000);
  return (
    <div>
      <p>상태 관련 코드</p>
      이름 : {username}
    </div>
  );
};

export default StateComponent;
