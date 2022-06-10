export const getStaticPaths = async () => {
  const resp = await fetch("http://localhost:3000/api/PRODUCTS/products");
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
  const resp = await fetch(`http://localhost:3000/api/PRODUCTS/products`);
  const data = await resp.json();

  const currentProduct = data.filter((item) => {
    return item.url === id;
  });

  return {
    props: {
      data: currentProduct[0],
    },
  };
};

const ProductDetails = ({ data }) => {
  const { pName, availableItems, cost } = data;
  return (
    <>
      <div className="flex flex-col mx-4 my-4">
        <div className="mx-8 my-4">
          <h1>
            This Page for <span className="font-extrabold"> {pName} </span> has
            been generated dynamically{" "}
          </h1>
        </div>
        <div className="mx-8 my-4">
          <h1>
            The available items for{" "}
            <span className="font-extrabold"> {pName} </span> are
            <span className="font-extrabold"> {availableItems} </span>
          </h1>
        </div>
        <div className="mx-8 my-4">
          <h1>
            The price for <span className="font-extrabold"> {pName} </span> are
            <span className="font-extrabold"> {cost} USD / month </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
