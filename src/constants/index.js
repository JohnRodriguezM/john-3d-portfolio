import {
  mobile,
  backend,
  creator,
  web,
  aws,
  //javascript,
  typescript,
  //html,
  //css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  tripplanner,
  movie,
  rick,
  juan,
  realState,
  //threejs,
  jausme,
  express,
  astro,
  GH,
  firebase,
  next,
  supabase,
  reactRouter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Work",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  /* {
     name: "HTML 5",
     icon: html,
     category: "Frontend",
     level: 1,
   },
   {
     name: "CSS 3",
     icon: css,
     category: "Frontend",
     level: 1,
   },*/
  {
    name: "Tailwind CSS",
    icon: tailwind,
    category: "Frontend",
    level: 2,
  },
  /* {
      name: "JavaScript",
      icon: javascript,
      category: "Frontend",
      level: 2,
    },*/
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
  /*  {
      name: "Three JS",
      icon: threejs,
      category: "Frontend",
      level: 4,
    },*/
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
    points: [
      "Implement different pages and components with vanilla JavaScript, ensuring they are accessible, intuitive and efficient.",
      "Fix bugs and improve app stability based on team requirements.",
      "Participar en la planificación y dar priorización de características de la página web.",

    ],
  },
  {
    title: "Web Developer",
    company_name: "Jausme CO",
    icon: jausme,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Jan 2023",
    points: [
      "Develop and maintain web applications using libraries such as React and its ecosystem in TypeScript",
      "Manage the attention to the requirements by the internal work team to ensure that the application is coherent and integrates correctly with existing systems.",
      "Participation in the definition of standards and good development practices through the testing of existing applications using testing libraries such as: jest and react-testing library."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie app",
    description:
      "The movies app allows you to watch a large number of movies and TV shows online. You can search by genre, actor or director, save your favorites and receive personalized recommendations. The app is constantly updated with new movies and shows so you always have something new to watch.",
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
    name: "Rick and Morty Fan App",
    description:
      "The Rick and Morty app allows you to watch all the episodes of the series. You can browse the episodes by season, save your favourites. Enjoy the interdimensional universe of Rick and Morty!.",
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
    name: "Political project",
    description:
      "Our campaign page presents our proposals and government objectives in a platform that is easy to navigate and accessible from any device. The page is secure and designed to adapt to different screen sizes.",
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
  }, {
    name: "Real state project",
    description:
      "Our real estate page presents our properties and objectives in a platform that is easy to navigate and accessible from any device. The page is secure and designed to adapt to different screen sizes.",
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
  }
];

export { services, technologies, experiences, testimonials, projects };