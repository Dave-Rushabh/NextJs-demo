import Head from "next/head";
import { useState } from "react";
import ContactUs from "../../components/Contact/ContactUsForm";

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeMyModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Head>
        <title>Contact-Us</title>
      </Head>

      <ContactUs
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        closeMyModal={closeMyModal}
      />
    </>
  );
};

export default Contact;
