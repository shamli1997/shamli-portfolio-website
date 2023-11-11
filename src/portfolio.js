/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shamli Ingole",
  title: "Hi, I'm Shamli",
  subTitle: emoji(
    "I am Shamli Ingole, a passionate and dedicated professional with 3 years of experience in software development. With a strong academic background and diverse technical skills, I am driven to excel in the field of software development. I thrive in challenging environments, constantly seeking opportunities to enhance my expertise and contribute to impactful projects."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1kbz47hMQOWSDrZz2MBsjtunNqO4jhok3?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shamli1997",
  leetcode: "https://leetcode.com/shamlicodes/",
  linkedin: "https://www.linkedin.com/in/shamli-ingole/",
  gmail: "shamli.ingole19@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: emoji(
    "🎢 A tech-savvy, full-stack developer on a wild ride to explore every corner of the tech universe and conquer every stack!"
  ),
  skills: [
    emoji(
      "⚡ Proficient in developing scalable microservices using FastAPI, Tornado, and Google Cloud, resulting in improved application performance."
    ),
    emoji(
      "⚡ Experienced in designing REST APIs with Tornado and Django REST, integrating machine learning tasks and enabling efficient data extraction using Google Cloud services."
    ),
    emoji(
      "⚡ Skilled in full-stack web development with Angular and ReactJS, delivering user-friendly applications that enhance engagement and satisfaction."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },

    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },

    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Santa Clara University",
      logo: require("./assets/images/sculogo.png"),
      subHeader: "Master of Science in Computer Science and Engineering",
      duration: "January 2023 - Present",
      descBullets: [
        "Coursework: Design and Analysis of Algorithms, Object Oriented Design and Analysis, Data Visualization, Computer Architecture"
      ]
    },
    {
      schoolName: "College of Engineering Pune",
      logo: require("./assets/images/coeplogo.jpeg"),
      subHeader:
        "Bachelor of Technology in Electronics and Telicommunications Engineering",
      duration: "June 2015 - May 2018",
      descBullets: [
        "Coursework: Data Structures and Algorithms, Digital System Design, Computer Network, Micro-controller and applications, Computer Organization and Advanced Microprocessors, RISC Micro-controllers and DSP processors"
      ]
    },
    {
      schoolName: "Center for Development of Advanced Computing",
      logo: require("./assets/images/cdaclogo.jpeg"),
      subHeader: "Post Graduate Diploma in Advanced Computing",
      duration: "August 2019 - February 2020",
      descBullets: [
        "Coursework: Data Structures and Algorithms, Advanced Web Programming, Java, Database Systems, .NET, Operating System, Advanced Software Development Methodologies, MEAN Stack,"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Software Developer",
      company: "Google Inc. (Contract)",
      companylogo: require("./assets/images/g_logo.jpeg"),
      date: "June 2021 – December 2022",
      descBullets: [
        "Spearheaded the development of REST APIs using Python’s Flask framework to trigger Google Cloud Composer DAG, streamlining workflow processes and reducing manual efforts by over 90%.",
        "Created a user-friendly Angular-TypeScript Framework web app to access study material and quizzes, resulting in a 70% increase in SNHU student engagement. Achieved 95% user satisfaction through rigorous UI testing and component optimization.",
        "Optimized microservices and improved application response time by 75% by reducing code execution time using Python FastAPI and Google Cloud technologies in Automated Document Processing project.",
        "Developed a scalable microservice responsible for executing the machine learning process for parsing the PDF and extracting data out of it, and integrated it with Firebase and Google Cloud Tasks.",
        "Elevated system performance by 60% through Kubernetes integration, optimizing code with Docker and CI/CD for faster deployment and improved workflow."
      ]
    },
    {
      role: "Full Stack Software Engineer",
      company: "Cybage Software",
      companylogo: require("./assets/images/cybagelogo2.webp"),
      date: "September 2020 – June 2021",
      descBullets: [
        "Boosted testing productivity by 80% through the implementation of a Python automation framework improved the efficiency and accuracy of testing multiple components within a data pipeline.",
        "Implemented Git for version control, Jest for frontend tests, and Swagger for API documentation. Reduced conflicts by 30%, increased test coverage by 40%, and enhanced documentation clarity by 20%. Resulted in refined code management.",
        "Led an Agile team in developing a sophisticated web application utilizing Django REST framework, React (JavaScript Library), HTML, and CSS, enabling the creation of essential features for a top-tier, user-centric application.",
        "Recognized as top performer in Python training batch within organization, awarded for exceptional understanding and practical application of the language. Developed web apps and data analysis tools, becoming a valuable contributor to the software development team."
      ]
    },
    {
      role: "Software Engineer",
      company: "Rockwell Automation",
      companylogo: require("./assets/images/rockwelllogo.jpeg"),
      date: "June 2018 – July 2019",
      descBullets: [
        "Engineered a Smart Factory Monitoring and Control System using Java with Spring Boot for the back end and React for the front end employing Object-Oriented Programming (OOP) principles to ensure modular and maintainable code.",
        "Authored comprehensive unit tests using JUnit for ensuring robust code quality and functionality. Enabled real-time manufacturing process and equipment monitoring in a factory setting."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PERSONAL AND COMPANIES' PROJECTS",
  projects: [
    {
      projectName: "SNHU Web App",

      projectDesc: [
        "Developed a user-friendly web app with React.js for SNHU students to access study material and quizzes, resulting in a 50% increase in student engagement.",
        "Conducted extensive UI testing and optimized components, leading to a 99% user satisfaction rate.",
        "Wrote UI test cases for a complex web application using a variety of testing frameworks and tools",
        "Technologies: React.js, HTML, CSS, Javascript"
      ]
    },
    {
      projectName: "Automated Document Processing",

      projectDesc: [
        "Built scalable microservices responsible for validation of the uploaded documents and executing the Machine Learning pipeline to process the uploaded claims forms and supporting documents.",
        "Reduced response time of the application through code optimization.",
        "Developed a python script to trigger the execution of document processing pipeline.",
        "Technologies: Fastapi(Python),Google Bigquery, Google Cloud Pub Sub"
      ]
    },
    {
      projectName: "Anomaly Detection",

      projectDesc: [
        "Developed REST APIs using python’s Tornado framework to trigger Google Cloud Composer Dag which carries out the machine learning tasks.",
        "Developed Python script to populate the nested Google Bigquery tables which is further used by Data Engineers in the team.",
        "Deployed the developed REST APIs on Google Cloud Run",
        "Technologies: Tornado(Python),Google Bigquery, Google Cloud Composer, Google Cloud Run"
      ]
    },
    {
      projectName: "PDF parsing and Extraction",

      projectDesc: [
        "Built a scalable microservice responsible to execute the machine learning process for parsing the pdf and extracting data out of it",
        "Developed the REST API to carry out the parsing process.",
        "Integrated the REST API with Google Cloud Task to carry out the time consuming asynchronous task",
        "Technologies: Fastapi (Python), firebase, Google Cloud Tasks"
      ]
    },
    {
      projectName: "TestRail Automation",

      projectDesc: [
        "Developed the python framework to automate the tests to check the correct functioning of the various components of the data pipeline.",
        "Integrated the python script with the web-based test case management tool(TestRail)",
        "Technologies: Python, Pytest, Google Bigquery, Google Cloud Composer, TestRail APIs"
      ]
    },
    {
      projectName: "Shout-it Web App",

      projectDesc: [
        "Developed a 3 tier web application where Reactjs is used as frontend, developed this website in python using django rest framework",
        "This project is a RESTful web service called Shout-It. Users are able to create shouts in text, audio, video, image form. Update and delete shouts, send friend requests to other people and see their shouts",
        "Technologies: Django REST framework(Python), Reactjs, CSS"
      ]
    },
    {
      image: require("./assets/images/dv1.png"),
      projectName: "Interactive data Visualization Dashboard",
      projectDesc: [
        "An interactive data visualization dashboard for analyzing waste data at Santa Clara University, offering a comprehensive and engaging platform to gain insights into waste management practices and trends."
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dv01-interactive-data-visualization-app-xq2jtn.streamlit.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dv2.png"),
      projectName: "MedQuest",
      projectDesc: [
        "A WebMD Data visualization tool to treat your medical conditions !"
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://word-embedding-visualization-main-xvo9zn.streamlit.app/"
        }
      ]
    },
    {
      image: require("./assets/images/covidproject.PNG"),
      projectName: "Covid 19 Tracker",
      projectDesc: [
        "COVID-19 tracker website developed using HTML, CSS, and JavaScript to provide real-time information and statistics about the COVID-19 pandemic."
      ],
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/shamli1997/Covid19-tracker"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle: "My Achievements!",

  achievementsCards: [
    {
      title: "Python Champion with First Rank Trophy",
      subtitle:
        "Achieved the first-place trophy as the top Python performer among 150 students after successfully completing an intense 3-month training program at Cybage Software.",
      image: require("./assets/images/pythonaward.jpeg"),
      imageAlt: "Python Champion Award"
    },
    {
      title: "Trailblazing Innovator",
      subtitle:
        "Awarded as trailblazer at Quantiphi for exceptional contribution to the development of a project as a software developer, demonstrating strong leadership skills and the ability to innovate and drive progress.",
      image: require("./assets/images/awardlogo.png"),
      imageAlt: "Google Assistant Action Logo"
    },

    {
      title: "Web Programming Wizard",
      subtitle:
        "Earned the coveted first rank and module topper accolade in the advanced web programming module during my postgraduate degree, demonstrating mastery and expertise in web development techniques and concepts.",
      image: require("./assets/images/awpaward.jpg"),
      imageAlt: "AWP logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "DISCUSS A PROJECT OR HAVE WONDERFUL JOB OPPORTUNITIES? MY INBOX IS OPEN FOR ALL.",
  email_address: "shamli.ingole19@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
