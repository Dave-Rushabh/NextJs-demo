import Head from "next/head";
import productStyles from "./styles/products.module.css";
import Button from "../../components/Button/Button";
import Link from "next/link";

export const getStaticProps = async () => {
  const resp = await fetch("http://localhost:3000/api/PRODUCTS/products");
  const data = await resp.json();

  return {
    props: {
      products: data,
    },
  };
};

const Products = ({ products }) => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div className={productStyles.container}>
        <div className={productStyles.body}>
          {products.map((item) => {
            return (
              <>
                <div key={item.id} className={productStyles.card}>
                  <div>{item.pName}</div>
                  <Link href={`/products/${item.url}`}>
                    <a>
                      <Button btnText="Know more" />
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

export default Products;
