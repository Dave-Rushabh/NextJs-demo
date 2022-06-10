import React from "react";

const Button = ({ btnText }) => {
  return (
    <>
      <button className="ml-2 rounded border-solid border-2 w-20 hover:border-black bg-white">
        {btnText}
      </button>
    </>
  );
};

export default Button;
