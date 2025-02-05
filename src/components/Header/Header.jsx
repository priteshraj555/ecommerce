import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Cart",
      link: "/cart",
    },
  ];
  return (
    <>
      <div className="bg-gray-800 p-5">
        <div className="flex flex-wrap justify-around text-white  text-lg">
          <div className="bg-orange-500 hover:bg-orange-600 p-2 rounded-lg font-serif font-bold">
            <Link to={"/"}> Shop</Link>
          </div>
          <div className="flex flex-wrap gap-10">
            {navItems.map((item) => (
              <span
                className="   text-white font-mono flex items-center justify-center gap-3"
                key={item.name}
              >
                <Link to={item.link}>{item.name}</Link>
              </span>
            ))}
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Header;
