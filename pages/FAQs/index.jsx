import Head from "next/head";

import FAQ from "./Accordion";
const loop = [1, 2];
const FAQs = () => {
  return (
    <>
      <Head>
        <title>FAQs</title>
      </Head>

      <div className="w-4/5 mx-auto">
        <div className="my-10">
          <p>How to avail the discount ? </p>
          <hr />
          {loop.map((item) => (
            <div key={item}>
              <FAQ />
            </div>
          ))}
        </div>
        <div className="my-10">
          <p>Offers </p>
          <hr />
          {loop.map((item) => (
            <div key={item}>
              <FAQ />
            </div>
          ))}
        </div>
        <div className="my-10">
          <p>Promo Codes </p>
          <hr />
          {loop.map((item) => (
            <div key={item}>
              <FAQ />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQs;
