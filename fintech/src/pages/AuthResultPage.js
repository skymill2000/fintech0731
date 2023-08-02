import React from "react";
import AppHeader from "../components/common/AppHeader";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
const AuthResultPage = () => {
  const queryParams = useLocation().search;
  console.log(queryParams);
  const parsed = queryString.parse(queryParams);
  console.log(parsed.code);
  const authCode = parsed.code;

  const handleClick = () => {
    //axios 요청 만들기
    let requestOption = {
      //메뉴얼보고작성
      url: "/oauth/2.0/token",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: {
        code: authCode,
        client_id: "9c785a50-ac39-4dac-af61-eb82eb80e139",
        client_secret: "93b9698e-14a8-4462-9f76-6fe06e0250de",
        redirect_uri: "http://localhost:3000/authResult",
        grant_type: "authorization_code",
      },
    };
    axios(requestOption).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <AppHeader title={"인증결과 / 토큰 생성"}></AppHeader>
      <p>코드 : {authCode}</p>
      <button onClick={handleClick}>accessToken 요청</button>
    </div>
  );
};

export default AuthResultPage;
