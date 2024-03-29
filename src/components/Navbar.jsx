import { /*useEffect*/ useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { stylesUsing } from "../styles";
import { useJsons } from "../constants";

import { logo, menu, close /*usa, spain*/ } from "../assets";
import { useTranslation } from "react-i18next";

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
  //Calling t and i18n method from useTranslation hook
  const { t, i18n } = useTranslation();
  //* llamado a useJsons
  const { navLinks } = useJsons();

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
            {/*  <span className="hidden md:block lg:hidden"> | Software Dev</span>*/}
            <span className="block "> | SD</span> {/* md:hidden  */}
            {/* <span className="hidden lg:block">| Software Developer</span> */}
          </p>
        </Link>

        <ul
          className={`list-none items-center ${
            toggle
              ? " flex flex-col gap-4 w-3/4 justify-center bg-gradient-to-l from-black to-purple-500 p-7 rounded-3xl"
              : "hidden"
          } sm:flex flex-row gap-11`}
        >
          <select
            className="appearance-none bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 pr-3 rounded shadow text-gray-700 w-200 "
            onChange={(e) => {
              const languageValue = e.target.value;
              i18n.changeLanguage(languageValue);
            }}
          >
            <option value="en">English</option>
            <option value="sp">Español</option>
          </select>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`
             ${
               active === link.title ? "text-white" : "text-secondary"
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
          <Link to="/contact">
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                settoggle(false);
              }}
              className=" sm:block bg-slate-600 text-white px-4 py-2 rounded-md font-medium hover:bg-white hover:text-secondary transition duration-300"
            >
              {t("hireMeNow")}
            </button>
          </Link>
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
