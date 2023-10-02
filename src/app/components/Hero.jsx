import Link from "next/link";
import React from "react";
import { FaFacebook, FaShoppingBag } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const Hero = () => {
  return (
    <div
      className="
    bg-fixed bg-no-repeat bg-[url('https://img.freepik.com/premium-vector/polygonal-3d-hand-with-phone-dark-blue-background-online-service-shop-web-app-concept_133680-174.jpg')] bg-cover h-screen bg-no-repeat relative scroll-smooth"
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center text-white flex flex-col gap-[20px] md:gap-[50px] ">
          <div className="mt-24 ">
            <span>
              <h1 className="lg:text-7xl md:text-9xl text-5xl font-bold font-sans tracking-wider ">
                R
              </h1>
            </span>
            <span>
              <h1 className=" lg:text-7xl md:text-9xl text-5xl text-orange-500 font-bold font-sans tracking-wider">
                S
              </h1>
            </span>
            <span>
              <h1 className="lg:text-7xl md:text-9xl text-5xl font-bold font-sans tracking-wider">
                T
              </h1>
            </span>
          </div>
          <div>
            <h1>
              {" "}
              <span className=" text-3xl md:text-2xl lg:text-5xl text-slate-100 font-extrabold text-s tracking-wider">
                {" "}
                RED{" "}
              </span>
              <span className=" text-3xl md:text-2xl lg:text-5xl text-orange-500 font-extrabold text-s tracking-wider">
                {" "}
                SERVICIOS{" "}
              </span>
              <span className=" text-3xl md:text-2xl lg:text-5xl text-slate-100 font-extrabold text-s tracking-wider">
                {" "}
                TECNOLÓGICOS{" "}
              </span>
            </h1>
          </div>
          <div className="mx-auto bg-cyan-400 h-[1px] w-[420px]"></div>
          <div className="text-sm md:text-base font-mono text-gray-100 tracking-widest">
            <p className="">
              Las empresas de soluciones tecnológicas son como los superhéroes
              del mundo empresarial. En RST adaptamos la tecnología a lo que tu
              empresa necesita
            </p>
            <br />

            <p className="text-sm md:text-base font-mono text-gray-100 tracking-widest ">
              En Red de Soluciones Tecnológicas estamos para salvar el día y
              resolver todos tus problemas del área tecnológica. Ya sea que
              necesites actualizar tu infraestructura informática, desarrollar
              una aplicación personalizada o simplemente obtener asesoramiento
              sobre cómo aprovechar al máximo la tecnología, nosotros tenemos la
              respuesta.
            </p>
          </div>
          <div>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Explorar Servicios
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-20 top-24 z-10 flex flex-col gap-5 items-center">
        <div className="bg-slate-600 w-[1px] h-[150px]"></div>
        <Link target="_blank" href="https://www.facebook.com/rstinsumosmedicos">
          <FaFacebook size={30} className="text-white hover:-translate-x-1.5" />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/rstargentina/">
          <TiSocialInstagram
            size={30}
            className="text-white hover:-translate-x-1.5"
          />
        </Link>
        <Link target="_blank" href="https://rstargentina.mitiendanube.com/">
          <FaShoppingBag
            size={30}
            className="text-white hover:-translate-x-1.5"
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
