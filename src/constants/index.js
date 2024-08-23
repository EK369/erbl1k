import {
  mobile,
  backend,
  creator,
  youtube,
  content,
  problem,
  coming,
  angryBird,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Back-end Developer",
    icon: mobile,
  },
  {
    title: "Project Manager",
    icon: backend,
  },
  {
    title: "Web Designer",
    icon: creator,
  },
  {
    title: "Problem Solver",
    icon: problem,
  },
  {
    title: "Content Creator",
    icon: content,
  },
  {
    title: "Coming Soon...",
    icon: coming,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Three.js Development",
    company_name: "E-Book Website",
    icon: threejs,
    iconBg: "#ffffff",
    date: "January 2024 - March 2024",
    points: [
      "Developing and maintaining web applications using Three.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Development",
    company_name: "Quiz Web App",
    icon: reactjs,
    iconBg: "#555555",
    date: "Sep 2023 - Dec 2023",
    points: [
      "Building and sustaining web applications utilizing React.js and associated technologies.",
      "Working closely with multidisciplinary teams, including designers, product managers, and developers, to deliver top-tier products.",
      "Creating responsive layouts and ensuring consistent performance across different browsers.",
      "Engaging in code reviews and offering insightful feedback to peers.",
    ],
  },
  {
    title: "PHP/Laravel Development",
    company_name: "Diet Website",
    icon: redux,
    iconBg: "#333333",
    date: "Feb 2022 - Jul 2022",
    points: [
      "Developing and maintaining web applications using PHP and the Laravel framework.",
      "Collaborating with cross-functional teams, including UI/UX designers, product managers, and backend developers, to build high-quality solutions.",
      "Implementing scalable and secure backend functionality while ensuring smooth integration with frontend components.",
      "Conducting code reviews and offering valuable feedback to improve code quality and performance.",
    ],
  },
  {
    title: "Unity/C# Development",
    company_name: "Flappy Bird Look-alike Game",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Jan 2024",
    points: [
      "Designing and developing immersive game experiences using Unity and C#.",
      "Collaborating with artists, game designers, and other developers to create engaging and high-performance gameplay.",
      "Implementing game mechanics, physics, and AI systems while ensuring smooth gameplay across different platforms.",
      "Participating in code reviews and providing feedback to enhance the quality and performance of the game codebase.",
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
    name: "Diet Web App",
    description:
      "Web-based platform that allows users to put their body information, their weight, and height, which from those information we make a website that allows user to have their wanted body. This is a user-friendly platform designed for a better quality of life and quality of website experience for users.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/eri1on/healthify2",
  },
  {
    name: "Quiz Web App",
    description:
      "Web application that provides users with a wide range of quizzes across different topics, offering both timed and untimed options. Users can track their progress, review their answers, and receive detailed feedback after completing each quiz. Quizzes are dynamically generated based on user preferences and difficulty levels. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "asp.net",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "mondodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://dev.azure.com/ek60111/W23G94",
  },
  {
    name: "Angry Bird Game",
    description:
      "A fun and engaging Angry Bird clone developed using C#, featuring smooth gameplay and intuitive controls. The game challenges players to navigate a bird through obstacles while achieving high scores. Designed with polished graphics and responsive physics to replicate the addictive experience of the original. ncludes randomized obstacle generation to keep the game fresh and unpredictable.",
    tags: [
      {
        name: "c#",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
    ],
    image: angryBird,
    source_code_link: "https://github.com/EK369/MyFirstGame-Flappy-Bird-",
  },
  {
    name: "Youtube Look-alike",
    description:
      "A dynamic video streaming platform built using HTML, CSS, and JavaScript, simulating the core features of YouTube. The platform includes a fully responsive design for seamless viewing across devices. Interactive elements such as like buttons, comment sections, and video suggestions mimic the user experience of YouTube.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/EK369/YoutubeLookalike",
  },
  {
    name: "Cooming Soon...",
    description:
      "Working on other project. Everything will be updated soon.",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: starbucks,
    source_code_link: "#about",
  },
];

export { services, technologies, experiences, testimonials, projects };
