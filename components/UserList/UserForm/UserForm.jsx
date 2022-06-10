import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UserForm = ({
  modalOpen,
  setIsModalOpen,
  userData,
  setUserData,
  allUser,
  setAllUser,
  submited,
  setSubmitted,
  edit,
  isEditMode,
  closeMyModal,
  editId,
}) => {
  const {
    register,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm({
    defaultValues: edit,
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log("onSubmit", name, value);
    setValue(name, value);
  };

  const noEmptyDataChecker = () => {
    // const actual = Object.values(userData);
    // const len1 = actual.length;
    // const checker = actual.filter((item) => item !== "");
    // const len2 = checker.length;
    // if (len2 == len1) {
    return true;
    // } else {
    //   return false;
    // }
  };

  const onSubmit = (data) => {
    console.log("data", data);
    let testUpdateUser = [...allUser];
    console.log("editId", editId);
    if (editId) {
      const existingUserFinderIndex = allUser.findIndex(
        (item) => item.id === editId
      );
      console.log("existingUserFinderIndex", existingUserFinderIndex);
      if (existingUserFinderIndex >= 0) {
        testUpdateUser[existingUserFinderIndex] = data;
        setAllUser([...testUpdateUser]);
      }
    } else {
      setAllUser((prev) => [...prev, { ...data, id: allUser.length + 1 }]);
    }
    // for new entry
    closeMyModal();

    // for updating the existing entry

    // new logic for editing functionality
  };

  useEffect(() => {
    setSubmitted("");
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-4/5 mx-auto my-10"
      >
        <div className="flex justify-center items-center h-16 my-2">
          <div className="w-1/3"></div>
          <div className="w-2/3 underline text-lg text-blue-600">
            Submit user data
          </div>
        </div>
        <div className="flex flex-row my-2 items-center">
          <div className="w-1/3 px-8">
            <label htmlFor="fName">First Name</label>
          </div>
          <div className="w-2/3">
            <input
              id="fName"
              name="fName"
              {...register("fName", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
              onChange={handleChange}
              className="border-solid border-2 border-red-300 w-60 focus:outline-none pl-4 text-sm rounded h-7"
            />

            <div className="text-red-600 text-sm">
              {errors.fName?.type === "required" && "*First Name is required"}
              {errors.fName?.type === "pattern" &&
                "*Numbers / special characters not allowed"}
            </div>
          </div>
        </div>

        <div className="flex flex-row my-2 items-center">
          <div className="w-1/3 px-8">
            <label htmlFor="lName">Last Name</label>
          </div>
          <div className="w-2/3">
            <input
              id="lName"
              name="lName"
              {...register("lName", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
              onChange={handleChange}
              className="border-solid border-2 border-red-300 w-60 focus:outline-none pl-4 text-sm rounded h-7"
            />
            <div className="text-red-600 text-sm">
              {errors.lName?.type === "required" && "*Last Name is required"}
              {errors.lName?.type === "pattern" &&
                "*Numbers / special characters not allowed"}
            </div>
          </div>
        </div>

        <div className="flex flex-row my-2 items-center">
          <div className="w-1/3 px-8">
            <label htmlFor="designation">Designation</label>
          </div>
          <div className="w-2/3">
            <select
              id="designation"
              name="designation"
              defaultValue="default"
              {...register("designation", { required: true })}
              onChange={handleChange}
              className="border-solid border-2 border-red-300 w-60  hover:cursor-pointer bg-white focus:outline-none pl-4 text-sm rounded h-7"
            >
              <option disabled value="default">
                Select Designation
              </option>
              <option value="frontend dev">Frontend Dev</option>
              <option value="backend dev">Backend Dev</option>
              <option value="fullstack dev">Fullstack Dev</option>
            </select>
            <div className="text-red-600 text-sm">
              {errors.gender?.type === "required" && "*Gender is required"}
            </div>
          </div>
        </div>

        <div className="flex flex-row my-2 items-center">
          <div className="w-1/3 px-8">
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="w-2/3">
            <input
              id="email"
              name="email"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              onChange={handleChange}
              className="border-solid border-2 border-red-300 w-60 focus:outline-none pl-4 text-sm rounded h-7"
            />
            <div className="text-red-600 text-sm">
              {errors.email?.type === "required" && "*Email is required"}
              {errors.email?.type === "pattern" && "*Email is not valid"}
            </div>
          </div>
        </div>

        <div className="flex flex-row my-2 items-center">
          <div className="w-1/3 px-8">
            <label htmlFor="mobile">Mobile No</label>
          </div>
          <div className="w-2/3">
            <input
              id="mobile"
              name="mobile"
              {...register("mobile", {
                required: true,
                pattern: /^[0-9]{10}$/,
              })}
              onChange={handleChange}
              className="border-solid border-2 border-red-300 w-60 focus:outline-none pl-4 text-sm rounded h-7"
            />
            <div className="text-red-600 text-sm">
              {errors.mobile?.type === "required" && "*Mobile No is required"}
              {errors.mobile?.type === "pattern" && "*Mobile No is not valid"}
            </div>
          </div>
        </div>

        <div className="flex flex-row my-2 items-center">
          <div className="w-1/3"></div>
          <div className="w-2/3">
            <button
              type="submit"
              disabled={noEmptyDataChecker() ? false : true}
              className="border-solid border-2 border-blue-600 w-20 rounded disabled:opacity-50"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserForm;
