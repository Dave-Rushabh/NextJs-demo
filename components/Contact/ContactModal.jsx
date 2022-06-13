import { Modal } from "react-responsive-modal";
import React from "react";

const ContactModal = ({ modalOpen, setModalOpen, closeMyModal }) => {
  return (
    <Modal
      open={modalOpen}
      onClose={closeMyModal}
      center
      styles={{
        modal: { width: "600px", overflow: "unset", height: "600px" },
      }}
    >
      Your Message Has been sent to the admin successfully...
    </Modal>
  );
};

export default ContactModal;
