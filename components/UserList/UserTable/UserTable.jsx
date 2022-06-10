import React, { useState, useMemo } from "react";
import EditableModal from "../UserModal/EditableModal";
import TableFormatter from "./TableFormatter";

const UserTable = ({
  userData,
  setUserData,
  allUser,
  setAllUser,
  submitted,
  setSubmitted,
  editId,
  setEditId,
}) => {
  const [editableModal, setEditableModal] = useState(false);
  const [edit, setEdit] = useState({});

  const handleDelete = (id) => {
    console.log(id, "id");
    const newArr = [];
    newArr = allUser.filter((item) => {
      return item.id !== id;
    });
    setAllUser(newArr);
  };

  const handleEdit = (user, id) => {
    setEditableModal(!editableModal);
    setEdit(user);
    setEditId(id);
  };

  // const handleEdit = () => {
  //   console.log("edited");
  // };

  // const handleDelete = () => {
  //   console.log("deleted");
  // };

  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "fName",
      },
      {
        Header: "Last Name",
        accessor: "lName",
      },
      {
        Header: "Designation",
        accessor: "designation",
      },
      {
        Header: "E-Mail",
        accessor: "email",
      },
      {
        Header: "Mobile No",
        accessor: "mobile",
      },
    ],
    []
  );

  const data = useMemo(() => allUser, [allUser]);

  return (
    <>
      {!editableModal ? (
        <>
          <TableFormatter
            columns={columns}
            data={data}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      ) : (
        <>
          <EditableModal
            editableModal={editableModal}
            setEditableModal={setEditableModal}
            edit={edit}
            editId={editId}
            userData={userData}
            setUserData={setUserData}
            allUser={allUser}
            setAllUser={setAllUser}
            submitted={submitted}
            setSubmitted={setSubmitted}
          />
        </>
      )}
    </>
  );
};

export default UserTable;
