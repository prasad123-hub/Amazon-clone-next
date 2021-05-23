import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
function success() {
  const router = useRouter();
  return (
    <div className="bg-green-100 h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank You, Your order has been Confirmed
            </h1>
          </div>
          <p className="mb-5">
            Thank you very much for your purchase. Your support is much
            appreciated and I'm looking forward to hearing your thoughts on your
            purchase!
          </p>
          <button onClick={() => router.push("/")} className="button">
            Go to Home page
          </button>
        </div>
      </main>
    </div>
  );
}

export default success;
