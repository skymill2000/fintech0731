import React, { useState } from "react";
import AppHeader from "../components/common/AppHeader";
import QrCodeReader, { QRCode } from "react-qrcode-reader";
import ModalWithdraw from "../components/withdraw/ModalWithdraw";
import Modal from "react-modal";

const QrReaderPage = () => {
  const [val, setVal] = useState("");
  const [openModal, setOpenModal] = useState(false); //no camera : true

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleRead = (code) => {
    setOpenModal(true);
    setVal(code.data);
  };
  return (
    <div>
      <AppHeader title={"qr 리더"}></AppHeader>
      <QrCodeReader delay={100} width={600} height={500} action={handleRead} />
      <Modal isOpen={openModal} onRequestClose={closeModal}>
        <ModalWithdraw tofintechno={val}></ModalWithdraw>
      </Modal>
    </div>
  );
};

export default QrReaderPage;
