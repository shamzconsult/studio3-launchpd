import { GiPencilRuler } from "react-icons/gi";
import { MdAnalytics, MdOutlineComputer } from "react-icons/md";

export type AudienceType = {
  icon: string;
  text: string;
};

export type CourseType = {
  id: string;
  image: string;
  title: string;
  description: string;
  price?: number;
  previewDescription: string;
  outcomesHeader: string;
  audienceDetails: AudienceType[];
  outcomes: string[];
};

export const courses: CourseType[] = [
  {
    id: "1",
    title: "Software Engineering",
    description:
      "Master frameworks and technologies including front-end and back-end development to build responsive and dynamic applications.",

    image:
      "https://res.cloudinary.com/dcgghkk7q/image/upload/v1740645994/Software_Engineering_nae6bb.jpg",
    // "https://res.cloudinary.com/dcgghkk7q/image/upload/v1737462236/edutech/edutech-new/unsplash_JKUTrJ4vK00-3_lhj5bi.png",
    previewDescription:
      "Transform your ideas into reality by joining our Software Development track. This course takes you from the basics of coding to advanced software engineering principles, and gain proficiency in programming languages, software design, and problem-solving techniques as a frontend or backend developer.",
    audienceDetails: [
      {
        icon: "FaHourglassStart",
        text: "Ideal for beginners looking to start a career in software development.",
      },
      {
        icon: "GiGears",
        text: "Individuals with a basic understanding of coding who want to dive into software development.",
      },
      {
        icon: "BsLightningCharge",
        text: "Ideal for people that wants to gain knowledge for career advancement.",
      },
      {
        icon: "GiGiftOfKnowledge",
        text: "Individuals interested in building web, or desktop applications.",
      },
      {
        icon: "MdOutlineLightbulb",
        text: "Professionals seeking to enhance their coding skills with modern tools.",
      },
      {
        icon: "MdOutlineLightMode",
        text: "People who want to learn software engineering best practices.",
      },
    ],
    outcomes: [
      "Understand the core principles of web development in Frontend or Backend development.",
      "Learn programming languages and frameworks including:  JavaScript, React and Node.js. mongoDB",
      "Understand software architecture, design patterns, and version control.",
      "Apply Agile methodologies and participate in collaborative projects",
      "Learn how to debug, test, and deploy software solutions in real-world scenarios.",
    ],
    outcomesHeader:
      "In our Software Development program, you will achieve the following learning outcomes",
  },
  {
    id: "2",
    title: "Data Science and AI",
    description:
      "Explore data analysis, machine learning, and AI to solve complex problems with data-driven insights.",
    image:
      "https://res.cloudinary.com/dcgghkk7q/image/upload/v1740645933/Data_Analytics_htbvzn.jpg",
    // "https://res.cloudinary.com/dcgghkk7q/image/upload/v1737462235/edutech/edutech-new/unsplash_JKUTrJ4vK00_z7cffp.png",
    previewDescription:
      "Unlock the power of data and artificial intelligence, Designed for aspiring data scientists and AI enthusiasts, this course blends live instruction, hands-on projects, and collaborative learning to equip you with the skills needed to solve real-world problems.",
    audienceDetails: [
      {
        icon: "FaHourglassStart",
        text: "Ideal for beginners and aspiring data analysts.",
      },
      {
        icon: "GiGears",
        text: "Individuals with a basic understanding of programming and statistics.",
      },
      {
        icon: "BsLightningCharge",
        text: "Ideal for people looking to gain knowledge for career advancement.",
      },
      {
        icon: "GiGiftOfKnowledge",
        text: "Mid-career professionals looking to transition into tech.",
      },
      {
        icon: "MdOutlineLightbulb",
        text: "Individuals who want to develop their skills.",
      },
      {
        icon: "MdOutlineLightMode",
        text: "Ideal for beginners and aspiring data analysts.",
      },
    ],
    outcomes: [
      "Understand the core concepts of data analysis.",
      "Machine Learning Techniques: Supervised and unsupervised learning.",
      "Data Science Fundamentals: Data cleaning, visualization, and statistical analysis.",
      "AI Applications: Neural networks, natural language processing, and computer vision.",
      "Tools and Frameworks: Python, pandas, and more.",
    ],
    outcomesHeader:
      "In our Data Analytics program you will achieve the following learning outcome",
  },

  {
    id: "3",
    title: "Product Management",
    description:
      "Get hands-on experience with product tools, and develop skills to lead cross-functional teams navigate the entire product lifecycle.",
    image:
      "https://res.cloudinary.com/dcgghkk7q/image/upload/v1740645998/product_bgprz3.jpg",
    // "https://res.cloudinary.com/dcgghkk7q/image/upload/v1737462235/edutech/edutech-new/unsplash_JKUTrJ4vK00-1_hkzi93.png",
    previewDescription:
      "Gain the skills to lead product development from idea to launch. This course covers essential product management concepts, including market research, product strategy, and cross-functional team leadership, preparing you to deliver successful products in competitive markets.",
    audienceDetails: [
      {
        icon: "FaHourglassStart",
        text: "Ideal for beginners looking to start a career in Product Management.",
      },
      {
        icon: "GiGears",
        text: "Current professionals wanting to transition into product management roles.",
      },
      {
        icon: "BsLightningCharge",
        text: "Ideal for people that wants to gain knowledge for career advancement.",
      },
      {
        icon: "GiGiftOfKnowledge",
        text: "Aspiring product managers looking to break into the tech industry.",
      },
      {
        icon: "MdOutlineLightbulb",
        text: "Individuals who want to develop their skills",
      },
      {
        icon: "MdOutlineLightMode",
        text: "Developers and designers interested in understanding the product lifecycle.",
      },
    ],
    outcomes: [
      "Understand the product lifecycle from ideation to launch.",
      "Learn to conduct market research and define user needs.",
      "Learn how to develop product roadmaps, strategies, and MVPs.",
      "Manage cross-functional teams and collaborate with stakeholders.",
      "Utilize tools like Jira, Trello, and product analytics for data-driven decisions.",
    ],
    outcomesHeader:
      "In our Product Management program, you will achieve the following learning milestones",
  },
  {
    id: "4",
    title: "Web3 Development",
    description:
      "Build the future with web3, master frameworks in  building decentralized applications. ",
    image:
      "https://res.cloudinary.com/dcgghkk7q/image/upload/v1740645987/web3_inzso9.jpg",
    // "https://res.cloudinary.com/dcgghkk7q/image/upload/v1739338286/edutech/unsplash_JKUTrJ4vK00_cgvkao.png",
    previewDescription:
      "Unlock the power of blockchain and decentralized technologies. Designed for aspiring Web3 developers and tech enthusiasts, this course covers everything from blockchain fundamentals to smart contract creation, equipping you with the skills to build decentralized applications (dApps) and contribute to the future of the internet.",
    audienceDetails: [
      {
        icon: "FaHourglassStart",
        text: "Ideal for beginners, and aspiring web3 developers",
      },
      {
        icon: "GiGears",
        text: "Individuals with a basic understanding of coding who want to dive into Web3 development.",
      },
      {
        icon: "BsLightningCharge",
        text: "Ideal for people that wants to gain knowledge for career advancement.",
      },
      {
        icon: "GiGiftOfKnowledge",
        text: "Ideal for developers eager to transition into blockchain technology.",
      },
      {
        icon: "MdOutlineLightbulb",
        text: "Mid-career professionals looking to upskill in decentralized applications.",
      },
      {
        icon: "MdOutlineLightMode",
        text: "Entrepreneurs interested in building blockchain-based solutions.",
      },
    ],
    outcomes: [
      "Understand the core principles of blockchain and decentralization.",
      "Master smart contract development using Solidity and Ethereum.",
      "Build and deploy decentralized applications (dApps).",
      "Learn about Web3 security, token standards, and NFTs.",
      "Tools and Frameworks: Solidity,  MetaMask, Truffle, and Web3.js and more for real-world applications.",
    ],
    outcomesHeader:
      "In our Web3 Development program, you will achieve the following key milestones",
  },
  {
    id: "5",
    title: "UI/UX Design",
    description:
      "Master the art of intuitive design with hands-on projects in wireframing, prototyping, and user research.",
    image:
      "https://res.cloudinary.com/dcgghkk7q/image/upload/v1740646735/UIux-min_qmqsro.jpg",
    // "https://res.cloudinary.com/dcgghkk7q/image/upload/v1739338286/edutech/unsplash_JKUTrJ4vK00-1_fczqpl.png",
    previewDescription:
      "Master the art of creating intuitive, user-centered digital experiences. This course guides you through the fundamentals of user research, wireframing, prototyping, and visual design, helping you craft engaging interfaces that prioritize functionality and aesthetics.",
    audienceDetails: [
      {
        icon: "FaHourglassStart",
        text: "Ideal for beginners looking to start a career in UI/UX Design.",
      },
      {
        icon: "GiGears",
        text: "Developers interested in enhancing their design skills.",
      },
      {
        icon: "BsLightningCharge",
        text: "Entrepreneurs wanting to create user-friendly products and interfaces.",
      },
      {
        icon: "GiGiftOfKnowledge",
        text: "Aspiring designers looking to start a career in UI/UX design.",
      },
      {
        icon: "MdOutlineLightbulb",
        text: "Professionals transitioning from graphic design to digital product design.",
      },
      {
        icon: "MdOutlineLightMode",
        text: "Individuals who want to develop their skills",
      },
    ],
    outcomes: [
      "Understand the principles of design thinking and user-centered design.",
      "Learn to conduct user research, create personas, and map user journeys.",
      "Master wireframing and prototyping tools like Figma",
      "Learn how to design responsive, accessible interfaces for web and mobile platforms.",
      "Learn how to test and iterate designs based on user feedback and usability testing.",
    ],
    outcomesHeader:
      "In our UI/UX Design program, you will achieve the following key milestones:",
  },
  // {
  //   id: "6",
  //   title: "Product Marketing",
  //   description:
  //     " Learn how to craft compelling product stories, execute data-driven campaigns, and position products for success in competitive markets.",
  //   image:
  //     "https://res.cloudinary.com/dcgghkk7q/image/upload/v1739784903/image_4_qchqvb.png",
  //   previewDescription:
  //     "Unlock the power of data and artificial intelligence, Designed for aspiring data scientists and AI enthusiasts, this course blends live instruction, hands-on projects, and collaborative learning to equip you with the skills needed to solve real-world problems.",
  //   audienceDetails: [
  //     {
  //       icon: "FaHourglassStart",
  //       text: "Ideal for beginners and aspiring data analysts.",
  //     },
  //     {
  //       icon: "GiGears",
  //       text: "Individuals with a basic understanding of programming and statistics.",
  //     },
  //     {
  //       icon: "BsLightningCharge",
  //       text: "Ideal for people looking to gain knowledge for career advancement.",
  //     },
  //     {
  //       icon: "GiGiftOfKnowledge",
  //       text: "Mid-career professionals looking to transition into tech.",
  //     },
  //     {
  //       icon: "MdOutlineLightbulb",
  //       text: "Individuals who want to develop their skills.",
  //     },
  //     {
  //       icon: "MdOutlineLightMode",
  //       text: "Ideal for beginners and aspiring data analysts.",
  //     },
  //   ],
  //   outcomes: [
  //     "Understand the core concepts of data analysis.",
  //     "Machine Learning Techniques: Supervised and unsupervised learning.",
  //     "Data Science Fundamentals: Data cleaning, visualization, and statistical analysis.",
  //     "AI Applications: Neural networks, natural language processing, and computer vision.",
  //     "Tools and Frameworks: Python, pandas, and more.",
  //   ],
  //   outcomesHeader:
  //     "In our UI/UX Design program, you will achieve the following key milestones:",
  // },
];

export const coursesPrice: CourseType[] = [
  {
    id: "1",
    title: "Software Engineering",
    description: "6 months",
    price: 500,
    image:
      "https://res.cloudinary.com/dcgghkk7q/image/upload/v1740645994/Software_Engineering_nae6bb.jpg",
    // "https://res.cloudinary.com/dcgghkk7q/image/upload/v1737462236/edutech/edutech-new/unsplash_JKUTrJ4vK00-3_lhj5bi.png",
    previewDescription:
      "Transform your ideas into reality by joining our Software Development track. This course takes you from the basics of coding to advanced software engineering principles, and gain proficiency in programming languages, software design, and problem-solving techniques as a frontend or backend developer.",
    audienceDetails: [
      {
        icon: "FaHourglassStart",
        text: "Ideal for beginners looking to start a career in software development.",
      },
      {
        icon: "GiGears",
        text: "Individuals with a basic understanding of coding who want to dive into software development.",
      },
      {
        icon: "BsLightningCharge",
        text: "Ideal for people that wants to gain knowledge for career advancement.",
      },
      {
        icon: "GiGiftOfKnowledge",
        text: "Individuals interested in building web, or desktop applications.",
      },
      {
        icon: "MdOutlineLightbulb",
        text: "Professionals seeking to enhance their coding skills with modern tools.",
      },
      {
        icon: "MdOutlineLightMode",
        text: "People who want to learn software engineering best practices.",
      },
    ],
    outcomes: [
      "Understand the core principles of web development in Frontend or Backend development.",
      "Learn programming languages and frameworks including:  JavaScript, React and Node.js. mongoDB",
      "Understand software architecture, design patterns, and version control.",
      "Apply Agile methodologies and participate in collaborative projects",
      "Learn how to debug, test, and deploy software solutions in real-world scenarios.",
    ],
    outcomesHeader:
      "In our Software Development program, you will achieve the following learning outcomes",
  },
  {
    id: "2",
    title: "Data Science and AI",
    description: "6 months",
    price: 500,
    image:
      "https://res.cloudinary.com/dcgghkk7q/image/upload/v1740645933/Data_Analytics_htbvzn.jpg",
    // "https://res.cloudinary.com/dcgghkk7q/image/upload/v1737462235/edutech/edutech-new/unsplash_JKUTrJ4vK00_z7cffp.png",
    previewDescription:
      "Unlock the power of data and artificial intelligence, Designed for aspiring data scientists and AI enthusiasts, this course blends live instruction, hands-on projects, and collaborative learning to equip you with the skills needed to solve real-world problems.",
    audienceDetails: [
      {
        icon: "FaHourglassStart",
        text: "Ideal for beginners and aspiring data analysts.",
      },
      {
        icon: "GiGears",
        text: "Individuals with a basic understanding of programming and statistics.",
      },
      {
        icon: "BsLightningCharge",
        text: "Ideal for people looking to gain knowledge for career advancement.",
      },
      {
        icon: "GiGiftOfKnowledge",
        text: "Mid-career professionals looking to transition into tech.",
      },
      {
        icon: "MdOutlineLightbulb",
        text: "Individuals who want to develop their skills.",
      },
      {
        icon: "MdOutlineLightMode",
        text: "Ideal for beginners and aspiring data analysts.",
      },
    ],
    outcomes: [
      "Understand the core concepts of data analysis.",
      "Machine Learning Techniques: Supervised and unsupervised learning.",
      "Data Science Fundamentals: Data cleaning, visualization, and statistical analysis.",
      "AI Applications: Neural networks, natural language processing, and computer vision.",
      "Tools and Frameworks: Python, pandas, and more.",
    ],
    outcomesHeader:
      "In our Data Analytics program you will achieve the following learning outcome",
  },
  {
    id: "3",
    title: "Product Management",
    description: "6 months",
    price: 500,
    image:
      "https://res.cloudinary.com/dcgghkk7q/image/upload/v1740645998/product_bgprz3.jpg",
    // "https://res.cloudinary.com/dcgghkk7q/image/upload/v1737462235/edutech/edutech-new/unsplash_JKUTrJ4vK00-1_hkzi93.png",
    previewDescription:
      "Gain the skills to lead product development from idea to launch. This course covers essential product management concepts, including market research, product strategy, and cross-functional team leadership, preparing you to deliver successful products in competitive markets.",
    audienceDetails: [
      {
        icon: "FaHourglassStart",
        text: "Ideal for beginners looking to start a career in Product Management.",
      },
      {
        icon: "GiGears",
        text: "Current professionals wanting to transition into product management roles.",
      },
      {
        icon: "BsLightningCharge",
        text: "Ideal for people that wants to gain knowledge for career advancement.",
      },
      {
        icon: "GiGiftOfKnowledge",
        text: "Aspiring product managers looking to break into the tech industry.",
      },
      {
        icon: "MdOutlineLightbulb",
        text: "Individuals who want to develop their skills",
      },
      {
        icon: "MdOutlineLightMode",
        text: "Developers and designers interested in understanding the product lifecycle.",
      },
    ],
    outcomes: [
      "Understand the product lifecycle from ideation to launch.",
      "Learn to conduct market research and define user needs.",
      "Learn how to develop product roadmaps, strategies, and MVPs.",
      "Manage cross-functional teams and collaborate with stakeholders.",
      "Utilize tools like Jira, Trello, and product analytics for data-driven decisions.",
    ],
    outcomesHeader:
      "In our Product Management program, you will achieve the following learning milestones",
  },
  {
    id: "4",
    title: "Web3 Development",
    description: "6 months ",
    price: 500,
    image:
      "https://res.cloudinary.com/dcgghkk7q/image/upload/v1740645987/web3_inzso9.jpg",
    // "https://res.cloudinary.com/dcgghkk7q/image/upload/v1739338286/edutech/unsplash_JKUTrJ4vK00_cgvkao.png",
    previewDescription:
      "Unlock the power of blockchain and decentralized technologies. Designed for aspiring Web3 developers and tech enthusiasts, this course covers everything from blockchain fundamentals to smart contract creation, equipping you with the skills to build decentralized applications (dApps) and contribute to the future of the internet.",
    audienceDetails: [
      {
        icon: "FaHourglassStart",
        text: "Ideal for beginners, and aspiring web3 developers",
      },
      {
        icon: "GiGears",
        text: "Individuals with a basic understanding of coding who want to dive into Web3 development.",
      },
      {
        icon: "BsLightningCharge",
        text: "Ideal for people that wants to gain knowledge for career advancement.",
      },
      {
        icon: "GiGiftOfKnowledge",
        text: "Ideal for developers eager to transition into blockchain technology.",
      },
      {
        icon: "MdOutlineLightbulb",
        text: "Mid-career professionals looking to upskill in decentralized applications.",
      },
      {
        icon: "MdOutlineLightMode",
        text: "Entrepreneurs interested in building blockchain-based solutions.",
      },
    ],
    outcomes: [
      "Understand the core principles of blockchain and decentralization.",
      "Master smart contract development using Solidity and Ethereum.",
      "Build and deploy decentralized applications (dApps).",
      "Learn about Web3 security, token standards, and NFTs.",
      "Tools and Frameworks: Solidity,  MetaMask, Truffle, and Web3.js and more for real-world applications.",
    ],
    outcomesHeader:
      "In our Web3 Development program, you will achieve the following key milestones",
  },
  {
    id: "5",
    title: "UI/UX Design",
    description: "6 months",
    price: 500,
    image:
      "https://res.cloudinary.com/dcgghkk7q/image/upload/v1740646735/UIux-min_qmqsro.jpg",
    // "https://res.cloudinary.com/dcgghkk7q/image/upload/v1739338286/edutech/unsplash_JKUTrJ4vK00-1_fczqpl.png",
    previewDescription:
      "Master the art of creating intuitive, user-centered digital experiences. This course guides you through the fundamentals of user research, wireframing, prototyping, and visual design, helping you craft engaging interfaces that prioritize functionality and aesthetics.",
    audienceDetails: [
      {
        icon: "FaHourglassStart",
        text: "Ideal for beginners looking to start a career in UI/UX Design.",
      },
      {
        icon: "GiGears",
        text: "Developers interested in enhancing their design skills.",
      },
      {
        icon: "BsLightningCharge",
        text: "Entrepreneurs wanting to create user-friendly products and interfaces.",
      },
      {
        icon: "GiGiftOfKnowledge",
        text: "Aspiring designers looking to start a career in UI/UX design.",
      },
      {
        icon: "MdOutlineLightbulb",
        text: "Professionals transitioning from graphic design to digital product design.",
      },
      {
        icon: "MdOutlineLightMode",
        text: "Individuals who want to develop their skills",
      },
    ],
    outcomes: [
      "Understand the principles of design thinking and user-centered design.",
      "Learn to conduct user research, create personas, and map user journeys.",
      "Master wireframing and prototyping tools like Figma",
      "Learn how to design responsive, accessible interfaces for web and mobile platforms.",
      "Learn how to test and iterate designs based on user feedback and usability testing.",
    ],
    outcomesHeader:
      "In our UI/UX Design program, you will achieve the following key milestones:",
  },
  // {
  //   id: "6",
  //   title: "Product Marketing",
  //   description: "6 months",
  //   price: 500,
  //   image:
  //     "https://res.cloudinary.com/dcgghkk7q/image/upload/v1739784903/image_4_qchqvb.png",
  //   previewDescription:
  //     "Unlock the power of data and artificial intelligence, Designed for aspiring data scientists and AI enthusiasts, this course blends live instruction, hands-on projects, and collaborative learning to equip you with the skills needed to solve real-world problems.",
  //   audienceDetails: [
  //     {
  //       icon: "FaHourglassStart",
  //       text: "Ideal for beginners and aspiring data analysts.",
  //     },
  //     {
  //       icon: "GiGears",
  //       text: "Individuals with a basic understanding of programming and statistics.",
  //     },
  //     {
  //       icon: "BsLightningCharge",
  //       text: "Ideal for people looking to gain knowledge for career advancement.",
  //     },
  //     {
  //       icon: "GiGiftOfKnowledge",
  //       text: "Mid-career professionals looking to transition into tech.",
  //     },
  //     {
  //       icon: "MdOutlineLightbulb",
  //       text: "Individuals who want to develop their skills.",
  //     },
  //     {
  //       icon: "MdOutlineLightMode",
  //       text: "Ideal for beginners and aspiring data analysts.",
  //     },
  //   ],
  //   outcomes: [
  //     "Understand the core concepts of data analysis.",
  //     "Machine Learning Techniques: Supervised and unsupervised learning.",
  //     "Data Science Fundamentals: Data cleaning, visualization, and statistical analysis.",
  //     "AI Applications: Neural networks, natural language processing, and computer vision.",
  //     "Tools and Frameworks: Python, pandas, and more.",
  //   ],
  //   outcomesHeader:
  //     "In our UI/UX Design program, you will achieve the following key milestones:",
  // },
];

export const availablecourses = [
  {
    icon: MdOutlineComputer,
    title: "Software Engineering",
    description:
      "Transform your ideas into reality by joining our Software Development track. Gain proficiency in programming languages, and frameworks, software design, and problem-solving techniques as a frontend or backend developer with react js, node js etc.",
  },
  {
    icon: MdAnalytics,
    title: "Data Analytics",
    description:
      "Turn data into actionable insights by joining our Data Analysis track. Learn to collect, clean, and interpret data using tools like Excel, SQL, and Python. Gain hands-on experience in building dashboards and visualizations that drive informed decision-making across industries.",
  },
  {
    icon: GiPencilRuler,
    title: "Product Management",
    description:
      "Master the art of building great products by joining our Product Management track. Learn to define product strategies, and lead cross-functional teams to deliver impactful solutions. Get hands-on experience with product tools, and develop skills to navigate the entire product lifecycle.",
  },
];

export const tutors = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1737371046/edutech/Frame_1000003618_oqyntx.png",
    name: "Helen Young",
    role: "UX Write - Google",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1737371046/edutech/Frame_1000003618_oqyntx.png",
    name: "Helen Young",
    role: "Tutor",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1737371046/edutech/Frame_1000003618_oqyntx.png",
    name: "Helen Young",
    role: "UX Write - Google",
  },
];
