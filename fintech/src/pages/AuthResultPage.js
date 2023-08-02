import React from "react";
import AppHeader from "../components/common/AppHeader";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

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
      url: "토큰요청",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: "",
    };
    axios(requestOption).then(() => {});
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
