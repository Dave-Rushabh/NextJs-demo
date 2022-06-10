import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import UserForm from "../UserForm/UserForm";

const ModalMain = ({
  modalOpen,
  setIsModalOpen,
  userData,
  setUserData,
  allUser,
  setAllUser,
  submitted,
  setSubmitted,
}) => {
  const closeMyModal = () => {
    setIsModalOpen(!modalOpen);
  };
  return (
    <>
      <Modal
        open={modalOpen}
        onClose={closeMyModal}
        center
        styles={{
          modal: { width: "600px", overflow: "unset", height: "600px" },
        }}
      >
        <div>
          <UserForm
            modalOpen={modalOpen}
            setIsModalOpen={setIsModalOpen}
            userData={userData}
            setUserData={setUserData}
            allUser={allUser}
            setAllUser={setAllUser}
            submitted={submitted}
            setSubmitted={setSubmitted}
            closeMyModal={closeMyModal}
          />
        </div>
        {submitted}
      </Modal>
    </>
  );
};

export default ModalMain;
