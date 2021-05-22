import fs from "fs";
import Image from "next/image";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";
import CheckOutProduct from "../components/CheckOutProduct";
// import { useSession } from "next-auth";

function Checkout() {
  const items = useSelector(selectItems);
  //   const [session] = useSession();

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* LEFT */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon basket is Empty"
                : "Shopping basket"}
            </h1>

            {items.map((item, i) => (
              <CheckOutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        {/*Right */}
        {/* <div>
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):
                <span className="font-bold"></span>
              </h2>
              <button>
                {!session ? "SignIn to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div> */}
        <div className="flex flex-col item-cente p-10">
          <h2 className="whitespace-nowrap mb-2">Subtotal</h2>
          <button className="button">Checkout</button>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
