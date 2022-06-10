import React from "react";
import { BsTelephone, BsBuilding } from "react-icons/bs";

const CustomerSupport = ({ city, number }) => {
  return (
    <>
      <div className="border-solid border-2 border-white w-40 my-2 px-2 mx-1">
        <div className="flex h-10 items-center">
          <div className="text-white">
            <BsBuilding />
          </div>
          <div className="ml-4">{city}</div>
        </div>

        <div className="flex h-10 items-center">
          <div className="text-white">
            <BsTelephone />
          </div>
          <div className="ml-4">{number}</div>
        </div>
      </div>
    </>
  );
};

export default CustomerSupport;
