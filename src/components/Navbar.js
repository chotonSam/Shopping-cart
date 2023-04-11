import React from "react";
import { useSelector } from "react-redux";

const Navbar = ({ setOpen }) => {
  const carts = useSelector((state) => state.carts);

  const cartTop = carts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.count,
    0
  );

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a onClick={() => setOpen(true)} href="#home" className="logo">
        Directmart
        </a>

        <div className="flex gap-4">
          <a
            onClick={() => setOpen(true)}
            href="#home"
            className="navHome"
            id="home"
          >
            Home
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#home"
            className="navCart"
            id="cart"
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="totalCart">{cartTop}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
