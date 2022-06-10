import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import UserForm from "../UserForm/UserForm";

const EditableModal = ({
  editableModal,
  setEditableModal,
  edit,
  userData,
  setUserData,
  allUser,
  setAllUser,
  submitted,
  setSubmitted,
  editId,
}) => {
  const closeMyModal = () => {
    setEditableModal(!editableModal);
  };
  return (
    <>
      <Modal
        open={editableModal}
        onClose={closeMyModal}
        center
        styles={{
          modal: { width: "600px", overflow: "unset", height: "600px" },
        }}
      >
        <UserForm
          edit={edit}
          editId={editId}
          isEditMode={true}
          userData={userData}
          setUserData={setUserData}
          allUser={allUser}
          setAllUser={setAllUser}
          setSubmitted={setSubmitted}
          submited={submitted}
          modalOpen={editableModal}
          setIsModalOpen={setEditableModal}
          closeMyModal={closeMyModal}
        />
        {submitted}
      </Modal>
    </>
  );
};

export default EditableModal;
