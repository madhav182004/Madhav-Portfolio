import {
    mobile,
    backend,
    creator,
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
    dsatm,
    allen,
    mckv,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "MERN Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "M. C. Kejriwal Vidyapeeth",
      company_name: "Middle School",
      icon: mckv,
      iconBg: "#E6DEDD",
      date: "2007 - 2020",
      // points: [
      //   "Developing and maintaining web applications using React.js and other related technologies.",
      //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      //   "Implementing responsive design and ensuring cross-browser compatibility.",
      //   "Participating in code reviews and providing constructive feedback to other developers.",
      // ],
    },
    {
      title: "Allen Carrier Institute",
      company_name: "High School",
      icon: allen,
      iconBg: "#E6DEDD",
      date: "2020 - 2022",
      // points: [
      //   "Developing and maintaining web applications using React.js and other related technologies.",
      //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      //   "Implementing responsive design and ensuring cross-browser compatibility.",
      //   "Participating in code reviews and providing constructive feedback to other developers.",
      // ],
    },
    {
      title: "Dayananda Sagar Academy of Technology and Management",
      company_name: "Bachelor's in Computer Science and Engineering",
      icon: dsatm,
      iconBg: "#383E56",
      date: "2022 - 2026",
      // points: [
      //   "Developing and maintaining web applications using React.js and other related technologies.",
      //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      //   "Implementing responsive design and ensuring cross-browser compatibility.",
      //   "Participating in code reviews and providing constructive feedback to other developers.",
      // ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Wanderlust",
      description:
        "A comprehensive platform that allows users to rent hotels, and houses, and offers curated recommendations for popular stay for your vacation. It also allows you to rent your place or room like in AirBnb.",
      tags: [
        {
          name: "mongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "ejs",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/madhav182004/wanderlust.git",
    },
    {
      name: "Portfolio Website",
      description:
        "A groundbreaking blend of React.js, Three.js, and Framer Motion, creating captivating 3D web environments. Harnessing the power of React.js for structure, Three.js for 3D rendering, and Framer Motion for fluid animations.",
      tags: [
        {
          name: "react js",
          color: "blue-text-gradient",
        },
        {
          name: "Three js and framer motion",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/madhav182004/My-Portfolio.git",
    },
    {
      name: "Pinecone",
      description:
        "Decentralized for carbon credit market. Developed a platform for trading carbon credits. Enabled trading of carbon credits between organizations, promoting net-zero carbon emissions.",
      tags: [
        {
          name: "react js",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "/transactions and /dashboard routes",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/madhav182004/weather-app.git",
    },
  ];
  
  export { services, technologies, experiences , projects };