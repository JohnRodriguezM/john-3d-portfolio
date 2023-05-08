import { /*useEffect*/ useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { stylesUsing } from "../styles";
import { navLinks } from "../constants";

import { logo, menu, close, /*usa, spain*/ } from "../assets";

/*const imgStyle = {
  width: "30px",
  height: "30px",
  objectFit: "fill",
  borderRadius: "43%",
  padding: "2px",
  cursor: "pointer",
};
*/
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, settoggle] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 639) {
        settoggle(false);
      }
    });
  }, []);

  return (
    <nav
      className={`
      ${stylesUsing.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary 
    `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className={` ${toggle ? "hidden" : "flex items-center gap-2"}`}
          onClick={() => {
            window.href = "/";
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 mr-2 object-contain rounded-xl"
          />
          <p className="text-white text-[1.1] font-bold cursor-pointer flex">
            John &nbsp;
            <span className="hidden md:block lg:hidden"> | Software Dev</span>
            <span className="block md:hidden "> | SD</span>
{/*
            <span className="hidden sm:block md:hidden">| SD</span>
            <span className="hidden md:block lg:hidden">| Software Dev</span>*/}
            <span className="hidden lg:block">| Software Developer</span>
          </p>
        </Link>

        <ul
          className={`list-none items-center ${toggle ? " flex flex-col gap-4 w-1/2 justify-center bg-gradient-to-l from-black to-purple-900 p-7 rounded-3xl" : "hidden"
            } sm:flex flex-row gap-11`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`
             ${active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white hover:shadow-2xl text-[1.1rem] font-medium cursor-pointer
             `}
                onClick={() => {
                  setActive(link.title);
                  settoggle(false);
                }}
              >
                {link.title}
              </a>
            </li>
          ))}
          <Link
            to="/contact"
          >
          <button
            onClick={() => {
              //window.open("https://www.fiverr.com/johnny_1999?up_rollout=true", "_blank");
             window.scrollTo(0, 0);
              settoggle(false);
            }}
            className=" sm:block bg-secondary text-white px-4 py-2 rounded-md font-medium hover:bg-white hover:text-secondary transition duration-300"
          >
            Hire Me
          </button>
          </Link>
         {/* <li
            className={`list-none gap-2 ${toggle ? "grid grid-cols-2" : "sm:flex"
              } `}
          >
            <span
              className="hover:scale-125 transition-all duration-500 ease-in-out"
              onClick={() => {

                settoggle(false);
              }}
            >
              <img title="English" style={imgStyle} src={usa} alt="English" />
            </span>
            <span
              className="hover:scale-125 transition-all duration-500 ease-in-out"
              onClick={() => {

                settoggle(false);
              }}
            >
              <img title="Spanish" style={imgStyle} src={spain} alt="Spanish" />
            </span>
          </li>*/}
        </ul>

        <div>
          <div
            onClick={() => settoggle(!toggle)}
            style={{
              marginTop: toggle ? "-110px" : "",
            }}
            className={`sm:hidden hover:scale-105 flex flex-1 justify-end items-center transition-all duration-500 ease-in-out`}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28x] h-[28px] object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
