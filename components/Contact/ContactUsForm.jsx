import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
// import ContactModal from "./ContactModal";

const ContactUsForm = ({ modalOpen, setModalOpen, closeMyModal }) => {
  // const [popUp, setPopUp] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const form = useRef();

  const onSubmit = (e) => {
    emailjs
      .sendForm(
        "service_aexz6i5",
        "template_j9t4ncg",
        form.current,
        "_BqxyRiH5s-2ENx_q"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your Message sent to the admin successfully");
          // setPopUp(!popUp)
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={form}
        className="flex flex-col w-4/5 mx-auto my-10"
      >
        <div className="flex flex-row my-2 items-center">
          <div className="w-1/3 px-8">
            <label htmlFor="from_name">Name</label>
          </div>
          <div className="w-2/3">
            <input
              name="from_name"
              placeholder="Enter Your Name"
              {...register("from_name", {
                required: true,
              })}
              className="border-solid border-b-2 border-footer-header w-60 focus:outline-none pl-4 text-sm h-7"
            />
            <div className="text-red-600 text-sm">
              {errors.from_name?.type === "required" && "*Name is required"}
            </div>
          </div>
        </div>
        <div className="flex flex-row my-2 items-center">
          <div className="w-1/3 px-8">
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="w-2/3">
            <input
              name="email"
              placeholder="Enter Your E-mail"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              className="border-solid border-b-2 border-footer-header w-60 focus:outline-none pl-4 text-sm h-7"
            />
            <div className="text-red-600 text-sm">
              {errors.email?.type === "required" && "*Email is required"}
              {errors.email?.type === "pattern" && "*Email is not valid"}
            </div>
          </div>
        </div>

        <div className="flex flex-row my-2 items-center">
          <div className="w-1/3 px-8">
            <label htmlFor="">Message</label>
          </div>
          <div className="w-2/3">
            <textarea
              name="message"
              className="border-solid border-b-2 border-footer-header w-full focus:outline-none pl-4 text-sm py-2"
              {...register("message", { required: true })}
              placeholder="Let us know how our services can be helpful to grow your business"
            />
            <div className="text-red-600 text-sm">
              {errors.message?.type === "required" &&
                "*This field can not be empty.."}
            </div>
          </div>
        </div>

        <div className="flex flex-row my-2 items-center">
          <div className="w-1/3"></div>
          <div className="w-2/3">
            <input
              type="submit"
              className="border-solid border-2 border-footer-header w-20 rounded disabled:opacity-50 hover:cursor-pointer hover:text-red-800 hover:border-black"
            />
          </div>
        </div>
      </form>
      {/* {popUp && (
        <ContactModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          closeMyModal={closeMyModal}
        />
      )} */}
    </>
  );
};

export default ContactUsForm;
