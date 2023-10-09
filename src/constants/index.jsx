import {
  /* mobile,
  backend,
  creator,*/
  // web,
  aws,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  tripplanner,
  macarenia,
  /*  movie,
  rick,
  juan,
  realState,*/
  jausme,
  express,
  astro,
  GH,
  firebase,
  next,
  supabase,
  reactRouter,
  realState,
  juan,
  rick,
  movie,
} from "../assets";

import { useTranslation } from "react-i18next";

export const useJsons = () => {
  const { t } = useTranslation();
  const navLinks = [
    {
      id: t("navLinks.about.id"),
      title: t("navLinks.about.title"),
    },
    {
      id: t("navLinks.experience.id"),
      title: t("navLinks.experience.title"),
    },
    {
      id: t("navLinks.projects.id"),
      title: t("navLinks.projects.title"),
    },
  ];

  const services = [
    {
      title: t("services.webDevelopment.title"),
      image: t("services.webDevelopment.image"),
    },
    {
      title: t("services.softwareDevelopment.title"),
      image: t("services.softwareDevelopment.image"),
    },
    {
      title: t("services.backend.title"),
      image: t("services.backend.image"),
    },
    {
      title: t("services.frontend.title"),
      image: t("services.frontend.image"),
    },
  ];

  const technologies = [
    {
      name: "Tailwind CSS",
      icon: tailwind,
      category: "Frontend",
      level: 2,
    },
    {
      name: "JavaScript",
      icon: javascript,
      category: "Frontend",
      level: 3,
    },
    {
      name: "TypeScript",
      icon: typescript,
      category: "Frontend",
      level: 3,
    },
    {
      name: "React JS",
      icon: reactjs,
      category: "Frontend",
      level: 4,
    },
    {
      name: "React Router",
      icon: reactRouter,
      category: "Frontend",
      level: 3,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
      category: "Frontend",
      level: 3,
    },
    {
      name: "Astro",
      icon: astro,
      category: "Frontend",
      level: 2,
    },
    {
      name: "Next JS",
      icon: next,
      category: "Frontend",
      level: 4,
    },
    {
      name: "Node JS",
      icon: nodejs,
      category: "Backend",
      level: 3,
    },
    {
      name: "Express JS",
      icon: express,
      category: "Backend",
      level: 3,
    },
    {
      name: "Firebase",
      icon: firebase,
      category: "Backend",
      level: 2,
    },
    {
      name: "Supabase",
      icon: supabase,
      category: "Backend",
      level: 2,
    },
    {
      name: "git",
      icon: git,
      category: "Tools",
      level: 3,
    },
    {
      name: "GitHub",
      icon: GH,
      category: "Tools",
      level: 3,
    },
    {
      name: "Docker",
      icon: docker,
      category: "Infrastructure",
      level: 2,
    },
    {
      name: "AWS",
      icon: aws,
      category: "Infrastructure",
      level: 2,
    },
  ];

  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Tripplanner.ai",
      icon: tripplanner,
      iconBg: "#E6DEDD",
      date: "Dec 2021 - Jan 2022",
    /*  points: [
        "Implement different pages and components with vanilla JavaScript, ensuring they are accessible, intuitive and efficient.",
        "Fix bugs and improve app stability based on team requirements.",
        "Participar en la planificación y dar priorización de características de la página web.",
      ],*/
    },
    {
      title: "Web Developer",
      company_name: "Jausme CO",
      icon: jausme,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Dec 2022",
     /* points: [
        "Develop and maintain web applications using libraries such as React and its ecosystem in TypeScript",
        "Manage the attention to the requirements by the internal work team to ensure that the application is coherent and integrates correctly with existing systems.",
        "Participation in the definition of standards and good development practices through the testing of existing applications using testing libraries such as: jest and react-testing library.",
      ],*/
    },
    {
      title: "Frontend engineer",
      company_name: "Hetiware OÜ",
      iconBg: "none",
      date: "May 2023 - Aug 2023",
     /* points: [
        "Developed the web application from scratch using Next Js and typescript.",
        "I built the initial system of the cryptocurrency exchange consuming the backend APIs and using systems and libraries for web3 development.",
      ],*/
    },
    {
      title: "Software engineer",
      company_name: "Macarenia Corp",
      icon: macarenia,
      iconBg: "none",
      date: "May 2023 - Present",
    /*  points: [
        "Frontend development with React, TypeScript, Redux, React-hook-form, Material UI and axios: Responsible for creating attractive and functional user interfaces using advanced technologies.",
        "Software Development Mentoring: provided guidance, encouraging skill growth and adoption of best practices in the team.",
        "Comprehensive Development and Implementation of the Document Management subsystem in the Application, covering the structuring, storage, search and efficient tracking of digital documents.",
      ],*/
    },
  ];

 /* const projects = [
    {
      technologies: t("projects.realEstate.technologies", {
        returnObjects: true,
      }),
      image: t("projects.realEstate.image"),
      source_code_link: t("projects.realEstate.source_code_link"),
      link_page: t("projects.realEstate.link_page"),
    },
  ];*/

  const projects = [
    {
      tags: [
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/JohnRodriguezM/movie-app",
      link_page: "https://movie-app-silk-delta.vercel.app/main.html",
    },
  
    {
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "yellow-text-gradient",
        },
      ],
      image: rick,
      source_code_link: "https://github.com/JohnRodriguezM/rick-morty-fan-app",
      link_page: "https://rick-morty-app-c905f.firebaseapp.com/",
    },
  
    {
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: juan,
      source_code_link: "https://github.com/JohnRodriguezM/political-project",
      link_page: "https://juan-jose-cubides.pages.dev/",
    },
    {
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
  
        {
          name: "tailwindcss",
          color: "blue-text-gradient",
        },
      ],
      image: realState,
      source_code_link: "https://github.com/JohnRodriguezM/real-estate",
      link_page: "https://web-inmuweb-inmobiliaria.pages.dev/",
    },
  ];

  return {
    navLinks,
    services,
    technologies,
    experiences,
    projects,
  };
};

