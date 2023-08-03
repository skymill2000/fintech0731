import React from "react";
import AppHeader from "../components/common/AppHeader";
import { QRCodeSVG } from "qrcode.react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

const QrCodePage = () => {
  const queryParams = useLocation().search;
  const parsed = queryString.parse(queryParams);
  const fintechUseNum = parsed.fintechUseNo;

  return (
    <div>
      <AppHeader title={"QR 코드"} />
      <QRCodeSVG value={fintechUseNum} size={256} />
    </div>
  );
};

export default QrCodePage;
