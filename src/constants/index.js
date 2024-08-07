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
    carrent,
    jobit,
    tripguide,
    threejs,
    vue,
    django,
    premier,
    aftereffect,
    tarabot_landing,
    
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
      title: "AI Model Trainer Developer",
      icon: mobile,
    },
    {
      title: "Video Editor",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "Vuejs",
      icon: vue,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "figma",
      icon: figma,
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
      name: "After Effect",
      icon: aftereffect,
    },
    {
      name: "Premier Pro",
      icon: premier,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer | Intern",
      company_name: "MMCY",
      icon: starbucks,
      iconBg: "#FF7F50",
      date: "July 2023 - Dec 2023",
      points: [
        "Developed an Applicant Tracking System (ATS) from the ground up.",
        "Implemented the front end using Tailwind CSS and Vue.js",
        "Constructed a RESTful API using Node.js and Express.js",
        "Utilized MongoDB as the database solution",
        "Actively collaborated with the team using GitHub for version control",
      ],
    },
    {
      title: "Full Stack Developer | Intern",
      company_name: "Addis Ababa Science and Technology University",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Apr 2022",
      points: [
        "Designed and developed the Online Exam Administration System for the university",
        "Showcased strong skills in backend development using PHP",
        "Handled front-end development using basic technologies",
        "Implemented the database system using MySQL",
      ],
    },
    {
      title: "Video Editor and You Tube Manager",
      company_name: "Upwork",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jun 2023 - Present",
      points: [
        "Proficient in Adobe Premiere Pro and After Effects",
        "Skilled in storytelling and narrative editing",
        "Experienced in documentary video editing",
        "Knowledgeable in YouTube management and SEO optimization",
      ],
    },
    {
      title: "Full-stack Developer",
      company_name: "Tarabot, Dubai, UAE | Remote",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developed a system for an agency organization connecting service providers worldwide",
        "Digitized paperwork and implemented UI/UX using Bootstrap",
        "Created the backend with PHP and MySQL for efficient candidate displaying, client bookings, and WhatsApp integration.",
        "Deloyment of the end product on Cpanel",
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
      name: "Tarabot Maids",
      description:
        "I developed a system for an agency organization that connects service providers worldwide. My responsibilities included digitizing paperwork, implementing UI/UX using Bootstrap, and creating the backend with PHP and MySQL for efficient candidate displaying, client bookings, and WhatsApp integration.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "html5",
          color: "pink-text-gradient",
        },
      ],
      image: tarabot_landing,
      source_code_link: "https://tarabotmaid.com/",
    },
    {
      name: "Biometric Security API",
      description:
        "Developed a unified authentication system using Django and React, simplifying user experience and bolstering security. Incorporated SNN, TensorFlow, and deep learning for advanced AI-based authentication.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "neuralnetwork",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };
