import Project1 from './assets/project1.png';
import Project2 from './assets/project2.png';
import Project3 from './assets/project3.png';
import Project4 from './assets/project4.png';
import Project5 from './assets/project5.png';
import Project6 from './assets/project6.png';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Projects',
    path: 'work',
  },
  {
    name: 'About',
    path: 'about',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];


export const skills = [
  {
    id: 1,
    name: 'HTML',
    percentage: 90,
    description:
      'High level of proficiency in using HTML to create web pages and other digital content. Able to create complex web page layouts, including responsive design for mobile devices, and to use HTML tags and attributes to structure content and define its presentation.',
  },

  {
    id: 2,
    name: 'CSS',
    percentage: 85,
    description:
      'High level of proficiency in using CSS to style and layout web pages and other digital content. Able to create visually appealing and responsive web designs, using a variety of layout techniques, including flexbox and grid. Familiar with CSS selectors, properties, and values.',
  },

  {
    id: 3,
    name: 'Javascript',
    percentage: 90,
    description:
      'Have a good level of proficiency in using JavaScript to add interactivity and functionality to web pages and other digital content. Able to write basic to intermediate-level JavaScript code to manipulate the Document Object Model (DOM) and create dynamic web page content.',
  },

  {
    id: 4,
    name: 'React',
    percentage: 90,
    description:
      'Have a good level of proficiency in using React to build user interfaces for web applications. Able to use React components, props, and state to create reusable and modular code that can be used across multiple pages and React Router to manage application routing and navigation..',
  },

  {
    id: 5,
    name: 'Node, Express',
    percentage: 90,
    description:
      'Have a decently high level of proficiency in using these technologies to build server-side web applications. Able to use Node.js to create a backend server, and use Express.js as a framework to handle HTTP requests, routing, and middleware.',
  },

  {
    id: 6,
    name: 'MongoDb, Mongoose',
    percentage: 90,
    description:
      'Have a high level of proficiency in these technologies to store, manage, and query data in the web applications. Able to use MongoDB to store data in collections, and use Mongoose to create schemas and queries to interact with the data.',
  },

 
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'E-Commerce',
    title: 'Food Delivery',
    description:
      'The responsive Front End Website for a food delivery Company developed using pure HTML and CSS.',
    site:'https://harshal-1.github.io/Food-Delivery-Website/',
  },
  {
    id: 2,
    img: Project2,
    category: 'Blogging',
    title: 'iCoder',
    description:
      'The responsive and creative Front End Website for a Blogging Company developed using Bootstrap.',
      site:'https://harshal-1.github.io/iCoderBootstrap/',
  },
  {
    id: 3,
    img: Project3,
    category: 'Management',
    title: 'ToDo List',
    description:
      'The responsive Interface of a ToDo list developed using React and local Storage.',
      site:'https://todo-react-dc023.web.app/',
  },
  {
    id: 4,
    img: Project4,
    category: 'Management',
    title: 'Expense Tracker',
    description:
      'The responsive Website for managing expenses developed using React components.',
      site:'https://expense-tracker-fc931.web.app/',
  },
  {
    id: 5,
    img: Project5,
    category: 'Finance',
    title: 'Investment Calculator',
    description:
      'A dynamic investment calculator website created with React, utilizing components, hooks, state management, and managing user Inputs.',
      site:'https://investment-calculator-d39f5.web.app/',
  },
  {
    id: 6,
    img: Project6,
    category: 'E-Commerce',
    title: 'Bakingo',
    description:
      'The responsive cake delivery website built with React, featuring reusable components, state management, HTTP requests, and form functionality.',
      site:'https://bakingo-c4f8f.web.app/',
  },
];

export const cv = [
  {
    id: 1,
    title: 'B.Tech',
    subtitle: '9.06 GPA',
    date: '2021 - Present',
    description:
      'Persuing Bachelors in Computer Science and Engineering from IIIT Sonepat and got an average of 9.06 GPA from last four semesters.',
    category: 'education',
  },

  {
    id: 2,
    title: 'Class XII',
    subtitle: '98.4%',
    date: '2020 - 2021',
    description:
      'Completed Secondary School from KDB Public School with English, Mathematics, Physics, Chemistry and Computer Science.',
    category: 'education',
  },

  {
    id: 3,
    title: 'Class X',
    subtitle: '97.2%',
    date: '2018 - 2019',
    description:
      'Completed High School from KDB Public School with English, Mathematics, Science, Social Science and Hindi.',
    category: 'education',
  },

  {
    id: 4,
    title: 'Designing',
    subtitle: 'Creating New Designs',
    date: 'PRESENT',
    description:
      'Passionate about transforming creative ideas into visually appealing and functional products or experiences.',
    category: 'interests',
  },

  {
    id: 5,
    title: 'Sports',
    subtitle: 'Snooker and Football',
    date: 'PRESENT',
    description:
      'Pretty Good at Snooker and enjoys playing it the most and plays Football for regular exercise and fun workout.',
    category: 'interests',
  },

  {
    id: 6,
    title: 'Online Games',
    subtitle: 'CS:Go and Valorant',
    date: 'PRESENT',
    description:
      'Enjoys playing these PC titles and mobile games as well with friends and constantly check and try out new games.',
    category: 'interests',
  },
];
