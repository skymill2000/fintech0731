import React, { useState } from "react";
import AppHeader from "../components/common/AppHeader";
import QrCodeReader, { QRCode } from "react-qrcode-reader";

const QrReaderPage = () => {
  const [val, setVal] = useState("");

  return (
    <div>
      <AppHeader title={"qr 리더"}></AppHeader>
      <QrCodeReader delay={100} width={600} height={500} action={setVal} />
    </div>
  );
};

export default QrReaderPage;
