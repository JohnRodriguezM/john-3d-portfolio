import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { backend, creator, mobile, realState, web } from "./assets";

i18n.use(initReactI18next).init({
  lng: "en", //default language
  /*  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },*/
  resources: {
    // ! ------------ Idioma inglés ------------
    // ! ------------ Idioma inglés ------------
    // ! ------------ Idioma inglés ------------
    en: {
      translation: {
        navLinks: {
          about: {
            id: "about",
            title: "About",
          },
          experience: {
            id: "experience",
            title: "Experience",
          },
          projects: {
            id: "projects",
            title: "Projects",
          },
          contact: {
            id: "contact",
            title: "Contact",
          },
        },
        //* hire me now!
        hireMeNow: "Hire me now!",
        softWareDeveloper: "Software Developer passionate",
        aboutCoffee: "about coffee.",
        saludo: "Hi, I'm",
        introduction: "Introduction",
        overview: "Overview",
        text_overview:
          "I am a software engineer with extensive experience in both frontend and backend technologies. I have played an integral role in various medium and large-scale projects, contributing not only to code writing and its functionalities, but also providing a critical perspective towards the product and the business as a whole. My knowledge encompasses various programming languages and environments, including TypeScript, Next.js, Nest.js, Firebase, among others. I stand out for my skill in assertive communication and my dedicated focus on achieving tangible results.",

        //* services
        services: {
          webDevelopment: {
            title: "Web Development",
            image: web,
          },
          softwareDevelopment: {
            title: "Software Developer",
            image: mobile,
          },
          backend: {
            title: "Backend Developer",
            image: backend,
          },
          frontend: {
            title: "Frontend Developer",
            image: creator,
          },
        },
        what_i_have_done_so_far: "What I have done so far",
        work_experience: "Work experience",
        technologies_i_have_worked_with: "Technologies I have worked with",
        technologies: "My tech stack",
        here_are_some_of_my_projects: "Here are some of my projects",
        works: "projects",
        text_works:
          "As a developer I have had the opportunity to work with clients from different cities and developers from different countries. Over the past two years, I have worked with a variety of technologies, including React, TypeScript, Supabase, Firebase, Tailwind, and more. I am committed to continue improving my skills and learning new technologies so that I can always offer the best service to my clients.",
        get_in_touch: "Get in touch",
        contact_me: "Contact",
        name: "Name",
        message: "Message",
        sending: "Sending...",
        send: "Send",

        //! reemplazo de los projects
        /*      projects: {
          MovieApp: {},
          RickAndMortyFanApp:{},
          PoliticalProject:{},
          realEstate: {
            name: "Real state project",
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
        },*/
      },
    },
    // ! ------------ Idioma español ------------
    // ! ------------ Idioma español ------------
    // ! ------------ Idioma español ------------
    // ! ------------ Idioma español ------------
    // ! ------------ Idioma español ------------
    // ! ------------ Idioma español ------------
    sp: {
      translation: {
        //* reemplazo de los navLinks
        navLinks: {
          about: {
            id: "about",
            title: "Acerca de mi",
          },
          experience: {
            id: "experience",
            title: "Experiencia",
          },
          projects: {
            id: "projects",
            title: "Proyectos",
          },
          contact: {
            id: "contact",
            title: "Contacto",
          },
        },
        //* hire me now!
        hireMeNow: "Contrátame ahora!",
        softWareDeveloper: "Desarrollador de software apasionado",
        aboutCoffee: "por el café.",
        saludo: "Hola, soy",
        introduction: "Introducción",
        overview: "Resumen",
        text_overview:
          "Soy un ingeniero de software con amplia experiencia tanto en tecnologías frontend como backend. He desempeñado un papel integral en varios proyectos de mediana y gran escala, contribuyendo no solo a la escritura de código y sus funcionalidades, sino también aportando una perspectiva crítica hacia el producto y el negocio en su conjunto. Mi conocimiento abarca varios lenguajes y entornos de programación, incluidos TypeScript, Next.js, Nest.js, Firebase, entre otros. Me destaco por mi habilidad en la comunicación asertiva y mi enfoque dedicado a lograr resultados tangibles.",

        //* services
        services: {
          webDevelopment: {
            title: "Desarrollo web",
            image: web,
          },
          softwareDevelopment: {
            title: "Desarrollador de software",
            image: mobile,
          },
          backend: {
            title: "Desarrollador Backend",
            image: backend,
          },
          frontend: {
            title: "Desarrollador Frontend",
            image: creator,
          },
        },
        what_i_have_done_so_far: "Lo que he hecho hasta ahora",
        work_experience: "Experiencia laboral",
        technologies_i_have_worked_with: "Tecnologías con las que he trabajado",
        technologies: "Mi stack tecnológico",
        here_are_some_of_my_projects: "Estos son algunos de mis proyectos",
        works: "proyectos",
        text_works:
          "Como desarrollador he tenido la oportunidad de trabajar con clientes de diferentes ciudades y desarrolladores de diferentes países. En los últimos dos años, he trabajado con una variedad de tecnologías, incluidas React, TypeScript, Supabase, Firebase, Tailwind, y más. Estoy comprometido a seguir mejorando mis habilidades y aprendiendo nuevas tecnologías para poder ofrecer siempre el mejor servicio a mis clientes.",
        get_in_touch: "Contáctame",
        contact_me: "Contacto",
        name: "Nombre",
        message: "Mensaje",
        sending: "Enviando...",
        send: "Enviar",

        //! reemplazo de los projects
        projects: {
          realEstate: {
            name: "Proyecto de Bienes Raíces",
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
