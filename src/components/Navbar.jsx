import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { stylesUsing } from "../styles"
import { navLinks } from "../constants"

import { logo, /*menu, close*/ } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")

  /*
    useEffect(()=> {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          document.querySelector("nav").className = `
          ${stylesUsing.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary
          shadow-md
          `
        } else {
          document.querySelector("nav").className = `
          ${stylesUsing.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary
          `
        }
      })
    })
  */
  return (
    <nav className={`
      ${stylesUsing.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary
    `}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.href = "/"
            window.scrollTo(0, 0)
          }}

        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain rounded-xl" />
          <p className="text-white text-[1.1] font-bold cursor-pointer">
            John
            <span className="hidden md:block">
              | Software Developer
            </span>
            <span className="block md:hidden">
              | SD
            </span>
          </p>

        </Link>
        <ul className="list-none  sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}
                className={`
             ${active === link.title ? "text-secondary" : "text-white"} hover:text-white text-[1.1rem] font-medium cursor-pointer`}

                onClick={() => {
                  setActive(link.title)

                }}
              >
                {link.title}
              </a>
            </li>
          ))}

        </ul>
      </div>
    </nav>
  )
}

export default Navbar