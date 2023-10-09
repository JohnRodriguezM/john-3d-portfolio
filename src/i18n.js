import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { realState } from "./assets";

i18n.use(initReactI18next).init({
  lng: "en", //default language
/*  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },*/
  resources: {
    en: {
      translation: {
        navLinks:{
          about:{
            id: "about",
            title: "About",
          },
          experience:{
            id: "experience",
            title: "Experience",
          },
          projects:{
            id: "projects",
            title: "Projects",
          },
        },


        //* reemplazo de los projects
        projects: {
          /* MovieApp: {},
          RickAndMortyFanApp:{},
          PoliticalProject:{}, */
          realEstate: {
            name: "Real Estate",
            description:
              "A real estate website built with React and Tailwind CSS",
            technologies: [
              {
                name: "React",
                color: "blue-text-gradient",
              },
              {
                name: "Tailwind CSS",
                color: "blue-text-gradient",
              },
            ],
            image: realState,
            source_code_link: "https://github.com/JohnRodriguezM/real-estate",
            link_page: "https://web-inmuweb-inmobiliaria.pages.dev/",
          },
          /*  {

          },
          {

          }*/
        },
      },
    },
    sp: {
      translation: {
        //* reemplazo de los navLinks
        navLinks:{
          about:{
            id: "about",
            title: "Acerca de mi",
          },
          experience:{
            id: "experience",
            title: "Experiencia",
          },
          projects:{
            id: "projects",
            title: "Proyectos",
          },
        },

        //* reemplazo de los projects
        projects: {
          realEstate: {
            name: "Bienes Raíces",
            description:
              "Un sitio web de bienes raíces construido con React y Tailwind CSS",
            technologies: [
              {
                name: "React",
                color: "blue-text-gradient",
              },
              {
                name: "Tailwind CSS",
                color: "blue-text-gradient",
              },
            ],
            image: realState,
            source_code_link: "https://github.com/JohnRodriguezM/real-estate",
            link_page: "https://web-inmuweb-inmobiliaria.pages.dev/",
          },
        },
      },
    },
  },
});
