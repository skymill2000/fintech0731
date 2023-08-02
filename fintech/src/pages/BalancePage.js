import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppHeader from "../components/common/AppHeader";
import queryString from "query-string";

const BalancePage = () => {
  let accessToken = "";
  let userSeqNo = "";
  const [balance, setBalance] = useState("아직없음");

  const queryParams = useLocation().search;
  const parsed = queryString.parse(queryParams);
  const fintechUseNum = parsed.fintechUseNo;

  function generateRandom9DigitNumber() {
    const min = 100000000; // Minimum value (smallest 9-digit number)
    const max = 999999999; // Maximum value (largest 9-digit number)

    const random9DigitNumber =
      Math.floor(Math.random() * (max - min + 1)) + min;
    return random9DigitNumber.toString();
  }

  const genTrasId = () => {
    return "M202300440U" + generateRandom9DigitNumber();
  };

  useEffect(() => {
    console.log(localStorage.getItem("accessToken"));
    console.log(localStorage.getItem("userSeqNo"));
    console.log(fintechUseNum);
    console.log(genTrasId());
    accessToken = localStorage.getItem("accessToken");
    userSeqNo = localStorage.getItem("userSeqNo");
    getBalance();
  }, []);

  const getBalance = () => {};

  return (
    <div>
      <AppHeader title="잔액조회"></AppHeader>
      {balance}
    </div>
  );
};

export default BalancePage;
