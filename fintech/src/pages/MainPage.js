import React, { useState, useEffect } from "react";
import MainAccountCard from "../components/main/MainAccountCard";
import AppHeader from "../components/common/AppHeader";
import axios from "axios";
const MainPage = () => {
  let accessToken = "";
  let userSeqNo = "";
  let [accountList, setAccountList] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem("accessToken"));
    console.log(localStorage.getItem("userSeqNo"));
    accessToken = localStorage.getItem("accessToken");
    userSeqNo = localStorage.getItem("userSeqNo");
    getAccountList();
  }, []);

  const getAccountList = () => {
    //axios 요청
    const sendData = {
      user_seq_no: userSeqNo,
    };

    const option = {
      method: "GET",
      url: "/v2.0/user/me",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
      },
      params: sendData,
    };

    axios(option).then(({ data }) => {
      console.log(data.res_list);
      setAccountList(data.res_list);
    });
  };
  return (
    <div>
      <AppHeader title={"메인"} />
      {accountList.map((account) => {
        return (
          <>
            <MainAccountCard
              bankName={account.bank_name}
              fintechUseNo={account.fintech_use_num}
            ></MainAccountCard>
          </>
        );
      })}
    </div>
  );
};

export default MainPage;
