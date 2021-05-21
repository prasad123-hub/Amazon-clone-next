import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/*Upper Header*/}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="cursor-pointer hover:underline">
            <p>Hello Prasad Narkhedkar </p>
            <p className="font-extrabold md:text-sm">Account & Lists </p>
          </div>

          <div className="cursor-pointer hover:underline">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className=" relative flex items-center cursor-pointer hover:underline">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black ">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline mt-2 font-extrabold md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/*Lower Header*/}
      <div className="flex items-center bg-amazon_blue-light text-sm text-white space-x-3 p-2 pl-6">
        <p className="cursor-pointer flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="cursor-pointer">Prime Video</p>
        <p className="cursor-pointer">Amazon Business</p>
        <p className="cursor-pointer">Today's deal</p>
        <p className="cursor-pointer hidden lg:inline-flex">Electronics</p>
        <p className="cursor-pointer hidden lg:inline-flex">Food & Grocery</p>
        <p className="cursor-pointer hidden lg:inline-flex">Prime</p>
        <p className="cursor-pointer hidden lg:inline-flex">Buy Again</p>
        <p className="cursor-pointer hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="cursor-pointer hidden lg:inline-flex">
          Health & Personal care
        </p>
      </div>
    </header>
  );
}

export default Header;
