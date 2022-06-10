import React from "react";
import Button from "../Button/Button";
import CustomerSupport from "./CustomerSupport";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-center h-80 bg-footer-header">
        <div className="h-72 w-1/3 ml-8 mt-10 flex flex-col">
          <div className="text-white underline">Customer Support Centers:</div>
          <div className="flex">
            <CustomerSupport city="Delhi" number="075-922568" />
            <CustomerSupport city="Rajkot" number="0281-2568975" />
          </div>
          <div className="flex">
            <CustomerSupport city="Delhi" number="075-922568" />
            <CustomerSupport city="Rajkot" number="0281-2568975" />
          </div>
        </div>
        <div className="w-1/3 h-72 w-1/3 ml-8 mt-8 flex flex-col justify-center items-center">
          <div>
            <h3 className="underline text-white">Our Office Locations:</h3>
            <div className="my-2">
              <div>Ahmedabad</div>
              <div>Bangalore</div>
              <div>Delhi</div>
              <div>Mumbai</div>
            </div>
          </div>
          <div>
            <h3 className="underline text-white">Our Channel Partners:</h3>
            <div className="my-2">
              <div>Partner-1</div>
              <div>Partner-2</div>
              <div>Partner-3</div>
              <div>Partner-4</div>
            </div>
          </div>
        </div>
        <div className="h-72 w-1/3 ml-8 mt-10">
          <label htmlFor="newsLetter" className="mr-4 text-white underline">
            Email:
          </label>
          <input
            type="text"
            name="newsLetter"
            id=""
            placeholder="Subsribe to Our Newsletter "
            className="rounded focus:outline-none border-solid border-2 h-7 border-black pl-2 text-sm"
          />
          <Button btnText="Subscribe" />
        </div>
      </div>
    </>
  );
};

export default Footer;
