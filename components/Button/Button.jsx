import React from "react";

const Button = ({ btnText, width }) => {
  return (
    <>
      <button
        className="ml-8 rounded border-solid border-2 w-20 hover:border-black bg-white my-2"
        style={{ width: width }}
      >
        {btnText}
      </button>
    </>
  );
};

export default Button;
