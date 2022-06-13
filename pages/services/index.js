import Head from "next/head";
import servicesStyles from "./styles/services.module.css";
import Button from "../../components/Button/Button";
import Link from "next/link";

export const getStaticProps = async () => {
  const resp = await fetch("http://localhost:3000/api/SERVICES/services");
  const data = await resp.json();

  return {
    props: {
      services: data,
    },
  };
};

const Services = ({ services }) => {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <div className={servicesStyles.container}>
        <div className={servicesStyles.body}>
          {services.map((item) => {
            return (
              <>
                <div key={item.id} className={servicesStyles.card}>
                  <div>{item.pName}</div>
                  <Link href={`/services/${item.url}`}>
                    <a>
                      <Button btnText="Know more" width="150px" />
                    </a>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
