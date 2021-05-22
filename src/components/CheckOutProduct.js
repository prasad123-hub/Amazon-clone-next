import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { removeFromBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";

const rating = [];

function CheckOutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    // remove from redux store
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5">
      {/* LEFT section of col */}
      <Image src={image} height={200} width={200} objectFit="contain" />
      {/* Middle section of col */}
      <div className="col-span-3 mx-3">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="GBP" />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              src="https://links.papareact.com/fdw"
              alt="#"
              className="w-12"
            />
            <p className="text-xs text-gray-500">Free Next day Delivery</p>
          </div>
        )}
      </div>
      {/* Right add/remove button */}
      <div className="flex flex-col space-y-2 my-2 justify-self-end">
        <button className="button">Add to Basket</button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
