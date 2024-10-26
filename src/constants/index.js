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
    title: "Cloud Engineer",
    icon: mobile,
  },
  {
    title: "Tester/ QA ",
    icon: backend,
  },
  {
    title: "Prompt Engineer",
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
    title: "Software Engineer Intern",
    company_name: "Vantro",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2024 - May 2024",
    points: [
      "Collaborated with a team on the Prompt Manager project, overseeing full-cycle development with MERN stack.",
      "Implemented the Run feature, facilitating efficient API interactions with various LLM models to process input prompts, overhauled data processing speeds by 150%, boosting performance of company's core software",
      "Revamped application stack by Dockerizing front-end, back-end, and MongoDB containers, simplifying deployment and ensuring consistent environments across software and eliminated environment-related issues.",
    ],
  },
  {
    title: "Software Engineer ",
    company_name: "F13 Technology",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jul 2022",
    points: [
      "Consolidated Python and Django REST Framework models and converters for developing cloud-based applications.",
      "Developed and accomplished a user interface using HTML, CSS, and JavaScript, leveraging Pandas for data table visualization; reduced data analysis time by 40% and restructured data visualization accuracy for team.",
      "Engineered robust database functionalities utilizing MySQL Workbench for data management. Orchestrated application hosting on AWS, seamlessly integrating S3, Lambda, and Load Balancers for optimal performance.",
      "Deployed application on AWS cloud using python’s http server and AWS EC2 and Code Deploy services.",
    ],
  },
  {
    title: "Software Engineer Trainee",
    company_name: "OneAdvanced",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2021 - Dec 2021",
    points: [
      "Provided digitalized solutions for product support, resulting in a time savings of 20+ hours per week.",
      "Refined a cloud-based ERP with upgrades and bug fixes, covering financial tools, CRM, and payroll management. Managed 'OpenPeople' an automated payroll system, expanding Progress 4GL for legacy system efficiency.",
      "Streamlined university management by developing an MVC, C#, and SQL Server interface, 56% increase in data administration efficiency",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Krina InfoTech Solution",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - Aug 2021",
    points: [
      "Spearheaded a web application overhaul using Figma, React, and Node.js, improving user experience and streamlining data processes. Achieved a 33% reduction in order processing time and boosted customer satisfaction by 25%",
      "Established a sophisticated data storage architecture, synthesizing SQLite with AWS RDS through Docker for increased scalability. Connected models to URLs, boosting public access and leveraging on AWS services.",
      "Initiated automated testing using Selenium WebDriver, resulting in a 50% reduction in manual testing time and ensuring a seamless user experience across all platforms.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
