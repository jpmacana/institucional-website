"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaDev } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { FaWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="fixed bg-[#0B2447] top-0 w-[100%] z-20">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="flex gap-1 items-center text-2xl font-bold">
          <span className="font-bold">R </span>
          <span className="font-bold text-orange-500">S </span>
          <span className="font-bold">T </span>
          <FaDev />
          <span className="font-semibold text-xl text-sky-300">Argentina</span>
        </div>

        <div className="hidden md:flex gap-10 tracking-wider text-white">
          <Link href="/" className="hover:text-sky-200">
            Servicios
          </Link>
          <Link href="/" className="hover:text-sky-200">
            Productos
          </Link>
          <Link href="/" className=" hover:text-sky-200">
            Contacto
          </Link>
        </div>
        <div>
          <button
            type="button"
            class="hidden md:block text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Contactar
          </button>
        </div>

        {toggle ? (
          <FaWindowClose
            onClick={() => setToggle(!toggle)}
            size={22}
            className="md:hidden block"
          />
        ) : (
          <FiMenu
            onClick={() => setToggle(!toggle)}
            size={30}
            className="md:hidden block"
          />
        )}
      </div>

      {/* Menu Responsivo */}

      <div
        className={`duration-300 md:hidden flex flex-col w-[70%] h-screen fixed bg-blue/70 text-white top-[60px] ${
          toggle ? `left-[0]` : `left-[-100%]`
        }`}
      >
        <Link href="/" className="hover:text-sky-200 p-5">
          Servicios
        </Link>
        <Link href="/" className="hover:text-sky-200 p-5">
          Productos
        </Link>
        <Link href="/" className=" hover:text-sky-200 p-5">
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
