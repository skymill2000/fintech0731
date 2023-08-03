import React from "react";
import AppHeader from "../components/common/AppHeader";
import { QRCodeSVG } from "qrcode.react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
const QRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const QrCodePage = () => {
  const queryParams = useLocation().search;
  const parsed = queryString.parse(queryParams);
  const fintechUseNum = parsed.fintechUseNo;

  return (
    <div>
      <AppHeader title={"QR 코드"} />
      <QRBlock>
        <QRCodeSVG value={fintechUseNum} size={256} />
      </QRBlock>
    </div>
  );
};

export default QrCodePage;
