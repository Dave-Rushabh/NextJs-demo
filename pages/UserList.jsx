import Head from "next/head";
import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import ModalMain from "../components/UserList/UserModal/ModalMain";
import UserTable from "../components/UserList/UserTable/UserTable";

const UserList = () => {
  const [userData, setUserData] = useState({
    fName: "",
    lName: "",
    designation: "",
    email: "",
    mobile: "",
    id: "",
  });

  const [allUser, setAllUser] = useState([]);
  const [modalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState("");
  const [editId, setEditId] = useState();

  console.log(allUser, "All");
  console.log(editId, "editId");

  // useEffect(() => {
  // let tempUsers = [...allUser];
  // const newAllUser = tempUsers.filter((item) => item.id === editId);
  // if (newAllUser.length > 1) {
  //   tempUsers.slice(1);
  //   setAllUser(tempUsers);
  // }
  // }, [allUser]);
  //
  // if (newAllUser.length > 1) {
  //   // const updatedAllUser = newAllUser.slice(1);
  //   newAllUser.slice(1);
  //
  // }

  const handleClick = () => {
    setIsModalOpen(!modalOpen);
  };

  return (
    <>
      <Head>
        <title>Users-List</title>
      </Head>
      <div className="h-10">
        <div className="flex justify-end my-2 mx-2">
          <div onClick={handleClick}>
            <Button btnText="Add User" />
          </div>
        </div>
      </div>
      <div className="h-screen">
        {!modalOpen ? (
          <>
            {allUser.length === 0 ? (
              <>
                <div className="mx-4">
                  <p>No users available</p>
                </div>
              </>
            ) : (
              <>
                <UserTable
                  modalOpen={modalOpen}
                  setIsModalOpen={setIsModalOpen}
                  userData={userData}
                  setUserData={setUserData}
                  allUser={allUser}
                  setAllUser={setAllUser}
                  submitted={submitted}
                  setSubmitted={setSubmitted}
                  editId={editId}
                  setEditId={setEditId}
                />
              </>
            )}
          </>
        ) : (
          <>
            <ModalMain
              modalOpen={modalOpen}
              setIsModalOpen={setIsModalOpen}
              userData={userData}
              setUserData={setUserData}
              allUser={allUser}
              setAllUser={setAllUser}
              submitted={submitted}
              setSubmitted={setSubmitted}
              editId={editId}
              setEditId={setEditId}
            />
          </>
        )}
      </div>
    </>
  );
};

export default UserList;
