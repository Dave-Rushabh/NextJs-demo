import Head from "next/head";
import Image from "next/image";
import img1 from "../../assests/HomePage-1.jpeg";
import img2 from "../../assests/HomePage-2.jpg";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div className="mx-auto w-5/6 grid grid-cols-4  my-8 gap-4 px-8 py-8">
        <div className=" rounded-lg py-10 border-solid border-2 border-blue-300 flex flex-col px-2 justify-center row-span-3 items-center">
          <p className="text-center text-2xl underline">Who are we ?</p>
          <br />
          <p className="text-justify text-sm">
            At Softimpact, we develop innovative and creative products and
            services that provide total communication and information solutions.
            Among a plethora of services, web design and development, tailor
            made applications, ERPs, CRMs, e-commerce solutions,
            business-to-business applications, business-to-client applications,
            managed hosting and internet portal management are few that we
            offer. Satisfied clients around the globe bear testimony to the
            quality of our work. As a leader in technology exploring, Softimpact
            is committed to exporting quality software worldwide.
          </p>
          <br />
          <br />
          <p className="text-jusify text-sm">
            The general purpose of Softimpact is to develop and promote advanced
            information technologies for multi-user operation.
          </p>
        </div>
        <div className="py-10 border-solid border-2 border-blue-300 flex flex-col justify-center rounded-lg">
          <p className="text-center text-2xl underline">: Our Vision :</p>
          <br />
          <p className="text-justify px-2 text-sm">
            Having done more than 100+ successful projects deliveries we can
            strongly stand on "Always deliver more than expected".
          </p>
          <br />
          <p className="text-justify px-2 text-sm">
            {" "}
            So, we have a vision of playing the vital role in customer's
            success.
          </p>
          <br />
          <p className="text-justify px-2 text-sm">
            {" "}
            We have a delivery success ratio of 96% and still thriving for more.
          </p>
        </div>
        <div className="  flex justify-center col-span-2 ">
          <Image src={img1} className="rounded-lg" />
        </div>

        <div className=" flex justify-center row-span-2">
          <Image src={img2} className="rounded-lg" />
        </div>
        <div className="py-10 border-solid border-2 border-blue-300 flex rounded-lg justify-center col-span-2 row-span-2">
          <div>
            <p className="text-2xl underline text-center">: Our Motto : </p>
            <br />
            <p className="text-lg px-4 text-center">
              Never settle for anything less than perfection ..
            </p>
            <br />
            <p className="text-justify px-4">
              As a software development company we have been focusing on
              delivering scalable and robust softwares with using cutting edge
              technologies such as MERN / MEAN stack development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
