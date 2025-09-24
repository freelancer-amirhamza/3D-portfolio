import {
    mobile,
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
    farmart,
    matthew,
    threejs,
    ecommerce,
    mernStackCurd,
    foodDelivery,
    firebaseEcommerce,
    kazibazaar,
    postgreSql1,
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio7,
    portfolio8,
    furniture,
    deshimotors,
    mysql,
    mysoft
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
    // {
    //   title: "Digital Marketer",
    //   icon: web,
    // },
    // {
    //   title: "React.JS Developer",
    //   icon: mobile,
    // },
    // {
    //   title: "Web Developer",
    //   icon: backend,
    // },
    {
      title: "HTML5",
      icon: html,
      // desc: "HTML stands for Hyper Text Markup Language. HTML is the standard markup language for Web pages. HTML elements are the building blocks of HTML pages."
    },
    {
      title: "CSS3",
      icon: css,
      // desc: "CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes"
    },{
      title: "Tailwind CSS",
      icon: tailwind,
      desc: ""
    },
    {
      title: "JavaScript",
      icon: javascript,
    },
    {
      title: "TypeScript",
      icon: typescript,
    },
    {
      title: "React JS",
      icon: reactjs,
      desc: ""
    },
    {
      title: "Redux Toolkit",
      icon: redux,
      desc: ""
    },
    {
      title: "Node JS",
      icon: nodejs,
      desc: ""
    },
    {
      title: "Mongo DB",
      icon: mongodb,
      desc: ""
    },
    {
      title: "MySQL",
      icon: mysql,
      desc: ""
    },
    {
      title: "PostgreSQL",
      icon: postgreSql1,
      desc: ""
    },
    {
      title: "Figma",
      icon: figma,
      desc: ""
    },
    {
      title: "GitHub",
      icon: git,
      desc: ""
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
    title: "Digital Marketer",
    company_name: "TachBond IT",
    icon: mobile,
    iconBg: "#383E56",
    date: "2021 – April 2022",
    points: [
      "Designed and executed digital marketing campaigns across social media and search platforms to increase brand visibility.",
      "Conducted market research and competitor analysis to identify growth opportunities and optimize strategy.",
      "Created content (blogs, posts, graphics) tailored to audience segments to boost engagement and conversion rates.",
      "Monitored analytics and KPIs, making data-driven adjustments to campaigns to maximize ROI.",
    ],
  },
  {
    title: "Digital Marketer (Part-time)",
    company_name: "Labbaik Motors & Car Decoration",
    icon: creator,
    iconBg: "#383E56",
    date: "2025 – Present",
    points: [
      "Manage social media content calendar, creating posts and visuals aligned with brand identity.",
      "Run paid advertising campaigns (Facebook, Instagram, Google Ads), track performance and optimize spend.",
      "Coordinate with designers and content creators to develop promotional assets and marketing collateral.",
      "Analyze campaign metrics such as CTR, engagement, and lead generation to inform future strategy.",
    ],
  },
  {
    title: "Junior Web Developer (Internship)",
    company_name: "My Soft IT Solution",
    icon: web,
    iconBg: "#383E56",
    date: "2025 – Present",
    points: [
      "Assist in developing web interfaces using React.js, HTML, CSS and ensure responsive design across devices.",
      "Debug and test features under supervision, fix bugs, and suggest improvements to enhance code quality.",
      "Collaborate with senior developers and UX/UI designers to translate design mockups into functional components.",
      "Participate in code reviews, follow best practices and learn version control workflows (e.g. Git).",
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
      name: "Deshi Motors E-Commerce",
      description:
        "This is a Full Stack Real E-Commerce website, I have built this website using Tailwind.CSS, React.js, Redux, node.js, express.js,JWT authentication, mongoDB, mongoose, paypal payment gateway, cloudinary, multer.",
      tags: [
        {
          name: "React.JS",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Node.JS",
          color: "pink-text-gradient",
        },
        {
          name: "Express.JS",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: mysoft,
      source_code_link: "https://github.com/freelancer-amirhamza",
      live_link: "https://mysoftitsolution.com",
    },
    {
      name: "Deshi Motors E-Commerce",
      description:
        "This is a Full Stack Real E-Commerce website, I have built this website using Tailwind.CSS, React.js, Redux, node.js, express.js,JWT authentication, mongoDB, mongoose, paypal payment gateway, cloudinary, multer.",
      tags: [
        {
          name: "React.JS",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Node.JS",
          color: "pink-text-gradient",
        },
        {
          name: "Express.JS",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: deshimotors,
      source_code_link: "https://github.com/freelancer-amirhamza/deshimotors.git",
      live_link: "https://deshimotors.com",
    },
    {
      name: "Kazi Bazaar E-Commerce",
      description:
        "This is a Full Stack Real E-Commerce website, I have built this website using Tailwind.CSS, Shadcn UI,  React.js, Redux, node.js, express.js,JWT authentication, mongoDB, mongoose, paypal payment gateway, cloudinary, multer.",
      tags: [
        {
          name: "React.JS",
          color: "blue-text-gradient",
        },
        {
          name: "Shadcn.UI",
          color: "green-text-gradient",
        },
        {
          name: "Node.JS",
          color: "pink-text-gradient",
        },
        {
          name: "Express.JS",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: kazibazaar,
      source_code_link: "https://github.com/freelancer-amirhamza/mern-ecommerce.git",
      live_link: "https://kazibazaar.com",
    },
    {
      name: "My Portfolio",
      description:
        "This is my first and primary personal portfolio website, I have built this website using HTML, CSS, JavaScript, ",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio8,
      source_code_link: "https://github.com/freelancer-amirhamza",
      live_link: "https://amirhamzadev.com",
    },
    {
      name: "Next.js Portfolio Website",
      description:
        "This is a NextJS portfolio website, I have built this website as practicing next.js project using react next.js tailwind CSS, typing and motion animation and extra advanced features.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwindCss",
          color: "pink-text-gradient",
        },
      ],
      image: matthew,
      source_code_link: "https://matthew-amir.netlify.app",
      live_link: "https://matthew-amir.netlify.app",
    },
    {
      name: "Full Stack Ecommerce Site",
      description:
        "This is a MERN Full Stack E-Commerce website, I have built this website using Tailwind.CSS,  React.js, Redux, Next.js, firebase, mongoose, paypal payment gateway, cloudinary, multer for practice purpose",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: farmart,
      source_code_link: "https://github.com/freelancer-amirhamza?tab=repositories",
      live_link: "https://farmart-amir.netlify.app/",
    },
    {
      name: "Full Stack Ecommerce Site",
      description:
        "This is a MERN Full Stack E-Commerce website, I have built this website using Tailwind.CSS, React.js, Redux,JWT authentication, node.js, express.js,JWT authentication, mongoDB, mongoose, paypal payment gateway, cloudinary, multer for practice purpose",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind.css",
          color: "pink-text-gradient",
        },
        {
          name: "mongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: foodDelivery,
      source_code_link: "https://github.com/freelancer-amirhamza?tab=repositories",
      live_link: "https://farmart-amir.netlify.app/",
    },
    {
      name: "Full Stack Ecommerce Site",
      description:
        "This is a MERN Full Stack E-Commerce website, I have built this website using Tailwind.CSS, Shadcn UI,  React.js, Redux, node.js, express.js, mongoDB, mongoose, paypal payment gateway, cloudinary, multer for practice purpose",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: firebaseEcommerce,
      source_code_link: "https://github.com/freelancer-amirhamza?tab=repositories",
      live_link: "https://myshop-amir.netlify.app",
    },
    {
      name: "Full Stack Ecommerce Site",
      description:
        "This is a MERN Full Stack E-Commerce website, I have built this website using Tailwind.CSS, React.js,  node.js, express.js, JWT authentication, mongoDB, mongoose, cloudinary, multer for practice purpose",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: mernStackCurd,
      source_code_link: "https://github.com/freelancer-amirhamza?tab=repositories",
      live_link: "https://farmart-amir.netlify.app/",
    },
    {
      name: "Front-End React  E-commerce Site",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwind.css",
          color: "pink-text-gradient",
        },
      ],
      image: furniture,
      source_code_link: "https://github.com/freelancer-amirhamza?tab=repositories",
      live_link: "https://furniture-psi-vert.vercel.app/",
    },
    {
      name: "Front-End Static E-Commerce Website",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/freelancer-amirhamza?tab=repositories",
      live_link: "https://amir-ecommerce.netlify.app/",
    },
    {
      name: "React personal portfolio",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio1,
      source_code_link: "https://github.com/freelancer-amirhamza?tab=repositories",
      live_link: "https://pink-portfolio-amir.netlify.app/",
    },
    {
      name: "LEGAL SOLUTIONS",
      description:
        "We are committed to excellence and have a deep understanding of the law. Our aim is to provide you with practical solutions.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind.css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio3,
      source_code_link: "https://github.com/freelancer-amirhamza",
      live_link: "https://legal-amir.netlify.app/",
    },
    {
      name: "Restaurant Website",
      description:
        "We are committed to excellence and have a deep understanding of the law. Our aim is to provide you with practical solutions.",
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
      image: portfolio2,
      source_code_link: "https://github.com/freelancer-amirhamza",
      live_link: "https://amirhamza-rest.netlify.app/",
    },
    {
      name: "Business Website",
      description:
        "We are committed to excellence and have a deep understanding of the law. Our aim is to provide you with practical solutions.",
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
      image: portfolio4,
      source_code_link: "https://github.com/freelancer-amirhamza",
      live_link: "https://amirhamza-business.netlify.app/",
    },
    {
      name: "Zeppto Website",
      description:
        "We are committed to excellence and have a deep understanding of the law. Our aim is to provide you with practical solutions.",
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
      image: portfolio7,
      source_code_link: "https://github.com/freelancer-amirhamza",
      live_link: "https://amirhamza-zeppto.netlify.app/",
    },

  ];

  export { services, technologies, experiences, testimonials, projects };