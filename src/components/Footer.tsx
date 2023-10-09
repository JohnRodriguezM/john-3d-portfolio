import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#1D1836] rounded-lg shadow mt-20 text-center p-8">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between ">
        <span className="text-lg sm:text-center ">
          © 2023{" "}
          <a
            href="https://github.com/JohnRodriguezM"
            target="_blank"
            className="hover:underline cursor-pointer"
          >
            John J Rodriguez
          </a>
        </span>
        <ul className="flex flex-wrap items-center text-base font-medium mt-10 sm:mt-0 justify-center">
          <li>
            <a href="#about" className="mr-4 hover:underline md:mr-6 ">
              {t('navLinks.about.title')}
            </a>
          </li>
          <li>
            <a href="#experience" className="mr-4 hover:underline md:mr-6">
              {t('navLinks.experience.title')}
            </a>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              {t('navLinks.contact.title')}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
