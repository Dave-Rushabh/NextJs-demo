export const getStaticPaths = async () => {
  const resp = await fetch("http://localhost:3000/api/SERVICES/services");
  const data = await resp.json();

  const paths = data.map((product) => {
    return {
      params: {
        id: product.url.toString(),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const resp = await fetch(`http://localhost:3000/api/SERVICES/services`);
  const data = await resp.json();

  const currentService = data.filter((item) => {
    return item.url === id;
  });

  return {
    props: {
      data: currentService[0],
    },
  };
};

const ServiceDetails = ({ data }) => {
  const { pName, Technologies, experience } = data;
  return (
    <>
      <div className="flex flex-col mx-4 my-4">
        <div className="mx-8 my-4">
          <h1>
            This Page for <span className="font-extrabold"> {pName} </span>has
            been generated dynamically
          </h1>
        </div>
        <div className="mx-8 my-4">
          <h1>
            In <span className="font-extrabold"> {pName} </span> we work on
            following technologies:
            {Technologies.map((tech) => (
              <>
                <span className="font-medium">
                  <h1>{tech}</h1>
                </span>
              </>
            ))}
          </h1>
        </div>
        <div className="mx-8 my-4">
          <h1>
            We have<span className="font-extrabold"> {experience} </span> years
            of experience in <span className="font-extrabold"> {pName} </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
