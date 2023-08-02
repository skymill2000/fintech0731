import React from "react";
import AppHeader from "../components/common/AppHeader";

const AuthPage = () => {
  const handleClick = () => {
    let tmpwindow = window.open("about:blank");
    const clientId = "9c785a50-ac39-4dac-af61-eb82eb80e139"; // <- 클라이언트 아이디 입력
    tmpwindow.location.href = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
  };

  return (
    <div>
      <AppHeader title={"인증시작"}> </AppHeader>
      <button onClick={handleClick}>인증하기</button>
    </div>
  );
};

export default AuthPage;
