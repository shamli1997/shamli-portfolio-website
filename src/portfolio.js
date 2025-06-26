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
    "Hi, I’m Shamli Ingole — a passionate Software Engineer with 3+ years of experience building scalable, high-impact solutions. I combine a strong academic foundation with hands-on expertise in backend development, AI-driven systems, and cloud technologies. I thrive on solving complex problems, learning continuously, and contributing to products that make a real difference."
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
    "🎢 A tech-driven software engineer navigating the world of backend systems, AI, and full-stack development — building scalable, reliable, and impactful solutions."
  ),
  skills: [
    emoji(
      "🚀 Proficient in building scalable microservices with FastAPI, Spring Boot, and Google Cloud — driving high-performance systems and reducing dashboard load times by up to 40%."
    ),
    emoji(
      "🤖 Experienced in designing robust REST and GraphQL APIs with Django REST and Spring Boot — integrating machine learning pipelines, automating data extraction, and accelerating product discovery by 3x."
    ),
    emoji(
      "💻 Skilled in full-stack development with ReactJS and Angular — delivering seamless, interactive, and high-performing applications that improve user experience and engagement."
    ),
    emoji(
      "☁️ Hands-on with cloud-native architectures using AWS, GCP, Docker, and Kubernetes — deploying distributed systems, automating infrastructure, and ensuring reliability at scale."
    ),
    emoji(
      "⚡ Adept at building real-time data and batch pipelines using Kafka, PySpark, and Google Composer — reducing processing costs by 50% and enabling large-scale automation for complex datasets."
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
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
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
      duration: "January 2023 - December 2024",
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
      role: "Software Engineer 2",
      company: "Intuit Inc.",
      companylogo: require("./assets/images/intuit.png"),
      date: "March 2025 – June 2025",
      descBullets: [
        "Developed GraphQL APIs using Java and Spring Boot to serve reporting data across 10+ microservices. Used AWS CDK to provision DynamoDB tables optimized for fast queries, cutting dashboard load times from 1.2s to 700ms.",
        "Wrote Java unit tests using Mockito for multiple Spring Boot services, reaching 100% coverage and improving overall reliability."
      ]
    },
    {
      role: "AI Software Engineer",
      company: "SAP America",
      companylogo: require("./assets/images/sap.png"),
      date: "September 2024 – March 2025",
      descBullets: [
        "Developed a Redis-backed asynchronous job queue to process 10k+ product attribute extraction requests, leveraging PostgreSQL to track job status and retries. Reduced processing time and eliminated task failures at peak load by enabling parallel worker scaling.",
        "Engineered a PySpark batch pipeline using Azure OpenAI’s Global Batch API to process large-scale multimodal product data (images + text). Cut LLM inference costs by 50%, and enriched HANA metadata , boosting product recommendation accuracy.",
        "Built a configurable Agentic AI shopping assistant using Python FastAPI and LangChain, enabling dynamic persona-driven conversations, secure prompt handling, and vector-based product recommendations that accelerated product discovery by 3x.",
        "Integrated LangChain with HANA for semantic vector search, improving attribute extraction accuracy in Product DNA analysis from 68% to 85%, and enhancing catalog metadata enrichment and product clustering."
      ]
    },
    {
      role: "Software Engineer",
      company: "KLA",
      companylogo: require("./assets/images/kla.png"),
      date: "June 2024 – September 2024",
      descBullets: [
        "Built a .NET (C#) desktop application using OOP and design patterns to automate config backups from MongoDB and MySQL databases across 7 stages. Replaced 32 manual steps and brought backup failure rate to zero.",
        "Developed KDBot, an enterprise-grade knowledge assistant leveraging Retrieval-Augmented Generation (RAG) and semiconductor domain-specific LLM fine-tuning to deliver context-aware responses across 10K+ internal documents."
      ]
    },
    {
      role: "Software Engineer",
      company: "Google Inc. (Contract)",
      companylogo: require("./assets/images/g_logo.jpeg"),
      date: "June 2021 – December 2022",
      descBullets: [
        "Designed Python Flask APIs to automate setup of 36+ nested Google BigQuery config tables and trigger Google Cloud Composer DAGs, eliminating 3+ hours of manual setup per machine learning pipeline across 20+ workflows.",
        "Developed Python FastAPI microservices for Google’s Document Intake Accelerator to automate classification and extraction for 100K+ documents, improving throughput from 3 to 15 batches/hour and reducing human review time by 60%.",
        "Implemented CI/CD pipelines with Skaffold, Docker, and GitHub Actions for containerized microservices on Google Kubernetes Engine (GKE). Reduced deployment time from 25 to under 10 minutes, improving release speed and reliability.",
        "Increased test coverage from 45% to 90% using Pytest for unit and end-to-end tests, catching critical bugs pre-release."
      ]
    },
    {
      role: "Software Engineer",
      company: "Cybage Software",
      companylogo: require("./assets/images/cybagelogo2.webp"),
      date: "September 2020 – June 2021",
      descBullets: [
        "Led backend development of a high-traffic e-commerce platform using Django REST, AWS Lambda, Redis, and Elasticsearch, scaling to 100K+ monthly users and reducing API latency from 600ms to 350ms by optimizing caching and search performance.",
        "Built a Python test automation framework for data pipelines, enabling 20+ QAs to eliminate 6+ manual validation steps per run."
      ]
    },
    {
      role: "Software Engineer",
      company: "Rockwell Automation",
      companylogo: require("./assets/images/rockwelllogo.jpeg"),
      date: "June 2018 – July 2019",
      descBullets: [
        "Built a Spring Boot microservice in Java to track real-time data from 100+ machines, improving fault detection speed by 3×.",
        "Designed a Kafka pipeline to process 500K+ events, enabling real-time alerts and cutting equipment issue response time by 70%."
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
  subtitle: "Showcasing Personal Projects and Industry Work",
  projects: [
    {
      image: require("./assets/images/productna.png"),
      projectName: "Product Data Enrichment",

      projectDesc: [
        "I engineered a scalable PySpark batch pipeline integrated with the SAP CX AI Toolkit to automate the extraction and enrichment of product attributes and descriptions from multimodal data (images and text). This pipeline powered the Product Attributes and Product Descriptions tools, enabling large-scale generation of attribute values, classifications, and AI-generated descriptions. It supported bulk operations like generating and translating descriptions in multiple languages with tone and length customization. The pipeline streamlined catalog management by publishing enriched metadata directly to SAP Commerce Cloud, significantly reducing manual effort and improving product recommendation accuracy."
      ],
      footerLink: [
        {
          name: "View Project",
          url: "https://learning.sap.com/learning-journeys/utilizing-sap-cx-ai-toolkit-for-sap-commerce-cloud/enriching-product-data-attributes-and-descriptions"
        }
      ]
    },
    {
      image: require("./assets/images/automated_dp.png"),
      projectName: "Automated Document Processing",

      projectDesc: [
        "I built scalable APIs and microservices for the Document Intake Accelerator at Google to automate government document processing at scale. This solution powered an end-to-end pipeline involving document ingestion, AI-driven classification using Vertex AI, entity extraction with Document AI, and validation workflows. It enabled automated processing of complex, multimodal documents with support for Human-in-the-Loop (HITL) review to ensure data accuracy and compliance. The system accelerated document handling, reduced manual workload, and integrated seamlessly with third-party tools like UiPath and ServiceNow for downstream automation."
      ],
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/GoogleCloudPlatform/document-intake-accelerator"
        }
      ]
    },
    {
      image: require("./assets/images/visual search.png"),
      projectName: "Visual Search - Object Detection",

      projectDesc: [
        "Built and integrated an object detection module using OWL-V2 within the Visual Search system to identify and extract multiple objects from user-uploaded images for product search. Optimized the detection pipeline by reducing redundant bounding boxes that appeared when the model detected overlapping or duplicate objects, significantly improving detection precision and enhancing the accuracy of downstream product matching. This improvement resulted in more reliable object isolation, leading to better product recommendations and a smoother user experience in the Visual Search workflow."
      ],
      footerLink: [
        {
          name: "View Project",
          url: "https://learning.sap.com/learning-journeys/utilizing-sap-cx-ai-toolkit-for-sap-commerce-cloud/simplifying-product-discovery"
        }
      ]
    },
    {
      image: require("./assets/images/sa.png"),
      projectName: "Shopping Assistant",

      projectDesc: [
        "Developed an AI-powered Shopping Assistant for e-commerce using LangChain and LangGraph to orchestrate multi-step conversations and retrieval workflows. The assistant leverages LLMs, semantic search, and RAG (Retrieval-Augmented Generation) to understand user intent and provide context-aware product recommendations. It integrates with SAP Commerce Cloud and the SAP CX AI Toolkit, enabling natural interactions like suggesting comfortable dress shoes for commuting along with matching items such as shirts. Powered by LangGraph’s stateful agent framework, the assistant manages dynamic conversations, remembers context, and guides users through seamless, human-like product discovery."
      ],
      footerLink: [
        {
          name: "View Project",
          url: "https://www.sap.com/assetdetail/2025/01/7c08d55b-ee7e-0010-bca6-c68f7e60039b.html"
        }
      ]
    },

    {
      image: require("./assets/images/talk.png"),
      projectName: "Talk Data To Me - Voice Assistant",

      projectDesc: [
        "Talk Data to Me is a voice-driven assistant built during Inrix Hack 2023, designed to enhance daily commutes by providing real-time, contextual information. The system integrates INRIX APIs with multiple public APIs to deliver personalized services, including real-time routing, parking availability, restaurant suggestions, entertainment recommendations, and smart home controls. The backend is architected with Node.js microservices handling location, entertainment, and smart home tasks, while the frontend is powered by React.js. This multi-service platform enables users to interact via voice commands to check commute times, find parking near destinations, review calendar events, or prepare their home environment before arrival."
      ],
      footerLink: [
        {
          name: "View Project",
          url: "https://devpost.com/software/talk-data-to-me?ref_content=my-projects-tab&ref_feature=my_projects"
        }
      ]
    },
    {
      image: require("./assets/images/fall_detect.png"),
      projectName: "SafeGuardian - Real Time Fall Detection",

      projectDesc: [
        "I developed SafeGuardian, a real-time fall detection system designed for elderly care using YOLOv8, MediaPipe Pose, and Streamlit. The system combines object detection and pose estimation to accurately detect falls based on body orientation, bounding box ratios, and keypoint analysis. It supports both webcam streams and video uploads, providing live detection with status badges for moving, standing, or falling. To ensure rapid response, it integrates with ntfy.sh to send instant push notifications when a fall is detected. The system reduces false positives by validating posture changes across multiple frames, making it reliable for home care, hospitals, and independent living environments."
      ],
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/shamli1997/SafeGuardian"
        }
      ]
    },
    {
      image: require("./assets/images/product_rec.png"),
      projectName: "Product Recommendation System",

      projectDesc: [
        "I built a Product Recommendation System that retrieves similar products based on a product’s unique ID using both traditional and advanced vector-based approaches. The system combines text-based vectorization (CountVectorizer), semantic embeddings with Sentence Transformers, and a scalable vector search using Qdrant for high-speed nearest neighbor retrieval. It processes product metadata—such as name, brand, color, and keywords—to generate rich product representations. The application features a FastAPI backend for API endpoints and a Streamlit frontend for interactive recommendations, enabling efficient, accurate, and scalable similarity search for e-commerce catalogs."
      ],
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/shamli1997/recommendation-system"
        }
      ]
    },
    {
      image: require("./assets/images/docuchat.png"),
      projectName: "DocuChat",

      projectDesc: [
        "Developed a full-stack web application that allows users to chat with uploaded PDFs using natural language queries. The system is built on a Retrieval-Augmented Generation (RAG) architecture that parses PDF content and generates semantic embeddings, which are stored in Pinecone vector database for efficient similarity search. When users ask questions, the app retrieves the most relevant document chunks based on vector similarity and feeds them to a Large Language Model (LLM) to generate context-aware responses grounded in the PDF content. This application seamlessly integrates LLMs, Pinecone-based vector search, and semantic retrieval to enable intelligent, document-driven conversations."
      ],
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/shamli1997/chatpdf"
        }
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
      title: "CXAI Impact & Innovation Award",
      subtitle:
        "Awarded for significant contributions to the CX AI team, including rapid enhancement of the Object Detection pipeline, improving its precision, and extending Product DNA capabilities with multiple image support. This award highlights impactful delivery, fast turnaround on critical features, and consistently driving innovation within a short timeframe.",
      image: require("./assets/images/keep_shining.png"),
      imageAlt: "Python Champion Award"
    },
    {
      title: "Vision Services & Styling Assistant Excellence Award",
      subtitle:
        "Recognized for quickly mastering the Vision Services stack and delivering outstanding work on the Vector Store with LangChain integration for the Styling Assistant use case. This award acknowledges the exceptional contribution in developing reliable vector-based solutions and writing comprehensive unit tests for all Vision Service use cases, significantly improving product capabilities and reliability.",
      image: require("./assets/images/award2.png"),
      imageAlt: "Python Champion Award"
    },
    {
      title: "Hackathon Winner",
      subtitle:
        "Achieved 1st place at the INRIX Hackathon 2023, leading the “Talk Data To Me” team to victory among 300 participants. This award recognizes the development of an innovative voice-driven commute assistant that integrates INRIX APIs, real-time traffic data, entertainment services, and smart home automation — delivering an intelligent, seamless user experience for modern drivers.",
      image: require("./assets/images/hackathon.jpeg"),
      imageAlt: "Python Champion Award"
    },
    {
      title: "Python Champion with First Rank Trophy",
      subtitle:
        "Achieved the first-place trophy as the top Python performer among 150 employees in the department after successfully completing an intensive 3-month Python training program at Cybage Software. This award recognizes outstanding technical excellence, problem-solving skills, and commitment to mastering Python in a highly competitive and challenging environment.",
      image: require("./assets/images/pythonaward.jpeg"),
      imageAlt: "Python Champion Award"
    },

    {
      title: "Web Programming Wizard",
      subtitle:
        "Earned the first rank and module topper accolade in the Advanced Web Programming module during the Postgraduate Diploma in Advanced Computing at CDAC. This award recognizes exceptional mastery in web development technologies, frameworks, and programming concepts, showcasing technical excellence and a strong command over modern web engineering practices.",
      image: require("./assets/images/web.jpeg"),
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
