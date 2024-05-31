import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  flutter,
  angular,
  css,
  reactjs,
  pythonlogo,
  php,
  postgre,
  android,

  nodejs,
  vuejs,
  git,
  mysql,
  csharp,
  celiker,
  mypo,
  ottonom,
  myway,
  magicline,
  myway2,
  imagewatermark,
  ledcontrol,
  magiclinerp,
  kafeapp,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: pythonlogo,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  { name: "Postgre", icon: postgre, },
  {
    name: "Vue",
    icon: vuejs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "C#",
    icon: csharp,
  },

  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Php",
    icon: php,
  },
  { name: "Android Studio", icon: android },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Social Media Management",
    company_name: "MYPO Technology",
    icon: mypo,
    iconBg: "#383E56",
    date: "June 2022 - August 2022",
    points: [
      "Account management was carried out in social media such as Facebook, Instagram, X and Tiktok",
      "SEO website and Cryptology",
    ],
  },
  {
    title: "Information Technology (IT)",
    company_name: "Ottonom Engineering and Solution Systems",
    icon: ottonom,
    iconBg: "#383E56",
    date: "July 2022 - October 2022",
    points: [
      "Since it is my first company in terms of software, I think it has contributed a lot to me.",
      "Here, I gained good information in the field of hardware, for example, I learned how servers work, what switches are for, server installation, cameras installation, and what we can access from internet IPs.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "MYWAY CONSULTING",
    icon: myway,
    iconBg: "#383E56",
    date: "July 2022 - October 2022",
    points: [
      "MYWAY CONSULTING is a software company that was established as a subsidiary of OTTONOM MÜHENDİSLİK ÇÖZÜMLERİ, the most effective engineering company in its field, and has been providing services in the fields of software development, software sales, training and consultancy since 2015.",
      "Here, I added a lot to my React, Vue, SQL knowledge (what I learned at university). They took me from zero to intermediate level.",
      "I created a simple website using HTML and CSS. Website link: https://myway-consulting.com",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Çeliker Technology",
    icon: celiker,
    iconBg: "#E6DEDD",
    date: "December 2022 - April 2023",
    points: [
      "I made an ozone project using Raspberry Pi Pico W. The machine in this project measured the amounts of ozone, carbon dioxide and oxygen in the air with sensors and added ozone to the environment if the amount of ozone was low.",
      "I created a server using Anvil works. I was able to create a mobile application using Flutter and turn my ozone machine on and off from my phone with APIs on the server. I accessed the data over the phone.",
      "Here I improved myself in Embedded systems.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Magicline Energy Systems",
    icon: magicline,
    iconBg: "#E6DEDD",
    date: "April 2024 – Present",
    points: [

    ],
  },
];


const projects = [
  {
    name: "Myway Consulting Website",
    description:
      "I prepared a website for the company I work for.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },

    ],
    image: myway2,
    source_code_link: "https://github.com/kara60/myway",
  },


  {
    name: "Image Watermark",
    description:
      "In this application, we watermark the logo or photo we want on another photo.",
    tags: [
      {
        name: "matlab",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "DWT ",
        color: "pink-text-gradient",
      },
    ],
    image: imagewatermark,
    source_code_link: "https://github.com/aykansaridogan/ImageWatermarking",
  },

  {
    name: "Led Control With Raspberry Pi",
    description:
      "LED project that can be turned on and off sensitively to sound. Materials We Use: • Raspberry Pi • LED • Female-female jumper cable • USB microphone",

    tags: [
      {
        name: "embeededsystem",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "raspberrypi",
        color: "pink-text-gradient",
      },
    ],
    image: ledcontrol,
    source_code_link: "https://github.com/aykansaridogan/Google-Asistan-ile-Kontrol-Edilen-Lamba-",
  },
  {
    name: "Magicline ERP",
    description:
      "The project is still under construction",

    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mySql",
        color: "pink-text-gradient",
      },
    ],
    image: magiclinerp,
    source_code_link: "https://github.com/",
  },
  {
    name: "Kafe APP UI/UX",
    description:
      "Only design example app",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "UI/UX",
        color: "green-text-gradient",
      },
      {
        name: "Design",
        color: "pink-text-gradient",
      },
    ],
    image: kafeapp,
    source_code_link: "https://github.com/aykansaridogan/kafe",
  },
];

export { services, technologies, experiences, projects };
