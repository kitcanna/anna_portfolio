import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,   
    github,
    butch,
    mauinspark,
    python, java, sql, cplus, dax, matlab,
    cgi, wharton, google, psm, tetrapak, mau, president, linkedin,
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
      id: "experience",
      title: "Timeline",
    },
    {
      id: "keyskills",
      title: "Key Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Computer Science & Telecommunications Engineering Student",
      icon: web,
    },
    {
      title: "Business/Data Analyst",
      icon: mobile,
    },
    {
      title: "Project Manager",
      icon: backend,
    },
    {
      title: "Scrum Master",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "C/C++",
      icon: cplus,
    },
    {
      name: "DAX",
      icon: dax,
    },
    {
      name: "MATLAB",
      icon: matlab,
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
    }
  ];

  const experiences = [
    {
      title: "Participant in the Female Student Acceleration Program",
      company_name: "CGI",
      icon: cgi,
      iconBg: "#383E56",
      date: "Feb 2023 - Present",
      points: [
        "This program is a selective, exclusive membership network designed for top female students, providing opportunities for growth, inspiration and relationship building.",
      ],
    },
    {
      title: "Business Analytics Specialization",
      company_name: "The Wharton School of the University of Pennsylvania",
      icon: wharton,
      iconBg: "#383E56",
      date: "Feb 2023",
      points: [
        "A comprehensive 5 course program, culminating in a capstone project.",
      ],
    },
    {
      title: "Student Talent Programme Consultant",
      company_name: "Tetra Pak (via Adecco)",
      icon: tetrapak,
      iconBg: "#383E56",
      date: "Apr 2022 - Present",
      points: [
        "I spearheaded a digitization, visualization, and automation project for production management worldwide.",
        "My aim was to develop a tool to streamline workflows and provide valuable insights through facilitating data‑driven decision‑making and enhancing a cross‑functional team’s productivity and efficiency on a intercontinental scale."
      ],
    },
    {
      title: "Computer Science & Telecommunications Engineering",
      company_name: "Malmö University",
      icon: mau,
      iconBg: "#383E56",
      date: "Aug 2021 - degree expected Jun 2024",
      points: [
        "CGPA: 3.92/4.00",
        "Awarded two scholarships for 2021; one for good academic results and one for exceptional dedication at my faculty.",
        "Student representative since 2021.",
        "Project Leader for Malmö University Introduction Committee from 2021‑2022."
      ],
    },
    {
      title: "President/Chairman of the Board",
      company_name: "BRF Borgmästaregården 1 i Lund (Housing cooperative/tenant‑owners’ society) ",
      icon: president,
      iconBg: "#E6DEDD",
      date: "Apr 2019 - Present",
      points: [
        "Directed the society for 4 years by working collaboratively with board members to establish organizational objectives.",
        "Through the implementation of multiple strategic plans with specific, measurable outcomes, I evaluated the progress of these outcomes to expand the organizational and economic capacity.",
        "By utilizing these measures, I was also able to navigate challenges posed by the pandemic and ensure the continued success of the organization."
      ],
    },
    {
      title: "Restaurant‑, Café‑ and Event Manager",
      company_name: "Stamstället, Café LUX, Moroten och Piskan",
      icon: president,
      iconBg: "#E6DEDD",
      date: "Nov 2015 ‑ Jun 2021",
      points: [
        "Increased revenue and helped set 3 record sale years in a row by leading and training personnel and conducting day‑to‑day project coordination, planning, and implementation across multiple teams.",
        "Service, fine dining, barista, bartender, garde‑manager, events and more."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Business Analytics Specialization",
      name: "The Wharton School of the University of Pennsylvania",
      company: "Feb 2023",
      image: wharton,
      source_code_link: "https://coursera.org/share/92e524ead68e63c7bc3a7f40e7f29829",
    },
    {
      testimonial:
        "Professional Scrum Master Certification (PSM I)",
      name: "Scrum.org",
      company: "Jul 2022",
      image: psm,
      source_code_link: "https://www.credly.com/badges/0c8009c7-ba0b-46af-b0d4-8920e2ee26bf?source=linked_in_profile",
    },
    {
      testimonial:
        "Google Data Analytics Professional Certificate",
      name: "Google via Coursera",
      company: "Jul 2022",
      image: google,
      source_code_link: "https://www.credly.com/badges/10604b56-9e97-4a19-8485-c235cfe12430/public_url",
    },
    {
      testimonial:
        "Google Project Management Professional Certificate",
      name: "Google via Coursera",
      company: "Feb 2022",
      image: google,
      source_code_link: "https://www.credly.com/badges/3bd66f39-a41f-42cf-b10b-b146499a4f5d?source=linked_in_profile",
    },
  ];
  
  const projects = [
    {
      name: "Project Leader & Manager for Malmö University Introduction Committee",
      description:
        "A year long extracurricular project ending in 5 weeks of grandiose activities and events for all of the university’s new students (approx. 2000 students), led by volunteering older students, with the purpose of helping them finding friends and their place within the university. I was the manager of all aspects of project‑, budget‑ and coordination management, and developer of all marketing and front‑end solutions.",
      tags: [
        {
          name: "backend/frontend",
          color: "blue-text-gradient",
        },
        {
          name: "project management and diplomacy",
          color: "green-text-gradient",
        },
        {
          name: "proactive approaches",
          color: "pink-text-gradient",
        },
      ],
      image: mauinspark,
      source_code_link: "https://drive.google.com/file/d/1iV1gzhl3b_GnB0py7l4OZ4G8djZCyax6/view?usp=sharing",
    },
    {
      name: "Project Butch",
      description:
        "Project BUTCH is an interactive game with insipiration from the red-light-green-light game from 'Squid Game'. In this case, the user needs to grab a piece of candy from a sensor before BUTCH turns around and catches you move. This game was developed with agile development.",
      tags: [
        {
          name: "producer",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        
      ],
      image: butch,
      source_code_link: "https://github.com/WHAAM-Group2",
    },
    {
      name: "Java Socket Application",
      description:
        "A dark themed, chat application for multiple users. Text/pictures can both be sent to individuals or groups. Data is logged. Program was developed using java sockets.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
      ],
      image: mau,
      source_code_link: "https://github.com/waelsucks/java-chat-application",
    },
    {
      name: "Github",
      description:
        "Link to my Github profile to see more projects and lab work.",
      tags: [

      ],
      image: github,
      source_code_link: "https://github.com/kitcanna",
    },
    {
      name: "LinkedIn",
      description:
        "Link to my LinkedIn profile to see more about my me and my career.",
      tags: [

      ],
      image: linkedin,
      source_code_link: "https://www.linkedin.com/in/anna-selstam/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };