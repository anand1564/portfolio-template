import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anand Pandey",
  initials: "DV",
  url: "https://dillion.io",
  location: "West Bengal, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I am an aspiring software engineer with a passion for building scalable and reliable software. I have experience working with a variety of technologies and have a strong foundation in computer science. I am always looking for new opportunities to learn and grow as a developer.",
  summary:
    "I am pursuing my Bachelor's Degree in Computer Science and Engineering. I am currently in my second year of college. I am a web developer and have built a variety of Full Stack Projects. I am also decent at DSA and have solved over 600 questions across platforms.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
    "Express",
    "MongoDB",
    "Javascript",
    "GraphQL",
    "NGINX",
    "AWS",
    "Socket.io",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "anand8584pandey@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/anand1564",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anand-pandey-561162216/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/anand__code",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@anand_code",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  // work: [
  //   {
  //     company: "Atomic Finance",
  //     href: "https://atomic.finance",
  //     badges: [],
  //     location: "Remote",
  //     title: "Bitcoin Protocol Engineer",
  //     logoUrl: "/atomic.png",
  //     start: "May 2021",
  //     end: "Oct 2022",
  //     description:
  //       "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  //   },
  //   {
  //     company: "Shopify",
  //     badges: [],
  //     href: "https://shopify.com",
  //     location: "Remote",
  //     title: "Software Engineer",
  //     logoUrl: "/shopify.svg",
  //     start: "January 2021",
  //     end: "April 2021",
  //     description:
  //       "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  //   },
  //   {
  //     company: "Nvidia",
  //     href: "https://nvidia.com/",
  //     badges: [],
  //     location: "Santa Clara, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/nvidia.png",
  //     start: "January 2020",
  //     end: "April 2020",
  //     description:
  //       "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  //   },
  //   {
  //     company: "Splunk",
  //     href: "https://splunk.com",
  //     badges: [],
  //     location: "San Jose, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/splunk.svg",
  //     start: "January 2019",
  //     end: "April 2019",
  //     description:
  //       "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
  //   },
  //   {
  //     company: "Lime",
  //     href: "https://li.me/",
  //     badges: [],
  //     location: "San Francisco, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/lime.svg",
  //     start: "January 2018",
  //     end: "April 2018",
  //     description:
  //       "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
  //   },
  //   {
  //     company: "Mitre Media",
  //     href: "https://mitremedia.com/",
  //     badges: [],
  //     location: "Toronto, ON",
  //     title: "Software Engineer",
  //     logoUrl: "/mitremedia.png",
  //     start: "May 2017",
  //     end: "August 2017",
  //     description:
  //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   },
  // ],
  education: [
    {
      school: "Hooghly Engineering and Technology College",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's in Computer Science and Engineering (B.Tech)",
      logoUrl: "/waterloo.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Techno India Group Public School",
      href: "https://wlu.ca",
      degree: "High School",
      logoUrl: "/laurier.png",
      start: "2020",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Realtime chat app",
      href: "https://github.com/anand1564/chat-app",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Developed a realtime chat application using socket.io,React.js, Typescript, PostgreSQL, Prisma, TailwindCSS, Shadcn UI.",
      technologies: [
        "socket.io",
        "React.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/anand1564/chat-app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ChatApp.png",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Notes Upload App",
      href: "https://github.com/anand1564/notes-app",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Developed a full notes upload application using React.js, Typescript , Prisma, TailwindCSS, Shadcn UI.",
      technologies: [
        "React.js",
        "Typescript",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anand1564/notes-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/notesApp.png",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "AI-POWERED RESUME EVALUATION",
      href: "https://github.com/anand1564/codeConquer25",
      dates: "Feb 2024 - March 2024",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anand1564/codeConquer25",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/SkillIssueAI.png",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "EventChain",
      href: "https://github.com/anand1564/hack4bengal",
      dates: "April 2025-Present",
      active: true,
      description:
        "Developed a blockchain based event ticketing platform deployed on Ethereum using Next.js, Typescript, PostgreSQL, Prisma, TailwindCSS.",
      technologies: [
        "Next.js",
        "Hardhat",
        "MongoDB",
        "TailwindCSS",
        "Solidity",
        "Alchemy",
        "Ethers.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/anand1564/hack4bengal",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/eventChainThumbnail.jpg",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  workingOn:[
    {
      id: "1",
      title:"UI",
      description:"I am working on a new UI library. It will be a collection of reusable components that can be used to build web applications. It will be built using React and TailwindCSS.",
      image:"",
      links:[
        {
          icon: <Icons.github className="size-3" />,
          title: "Source",
          href: "",
        },
      ],
    }
  ]
} as const;
