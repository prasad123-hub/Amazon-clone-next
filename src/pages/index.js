import Head from "next/head";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import Banner from "../components/Banner";

export default function Home({ products }) {
  console.log(products);
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/*ProductFeed*/}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    function (res) {
      return res.json();
    }
  );

  return {
    props: {
      products,
    },
  };
}

/// GET >>>> https://fakestoreapi.com/products
