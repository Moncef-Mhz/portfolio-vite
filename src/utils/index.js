import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiVisualstudiocode,
  SiMongodb,
  SiPostman,
  SiExpress,
  SiNodedotjs,
  SiNextdotjs,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const techIcons = [
  { name: "Next js", icon: TbBrandNextjs },
  { name: "React js", icon: SiReact },
  { name: "Mongo db", icon: SiMongodb },
  { name: "Tailwind css", icon: SiTailwindcss },
  { name: "Express js", icon: SiExpress },
  { name: "node js", icon: SiNodedotjs },
  { name: "javascript", icon: SiJavascript },
  { name: "typescript", icon: SiTypescript },
  { name: "html", icon: SiHtml5 },
  { name: "css", icon: SiCss3 },
  { name: "Figma", icon: SiFigma },
  { name: "vs code", icon: SiVisualstudiocode },
  { name: "Postman", icon: SiPostman },
  { name: "API", icon: TbApi },
];
export const projects = [
  {
    title: "velario",
    description: "UI/UX",
    id: 1,
    icon: [{ icon: SiFigma, name: "figma" }],
    img: "/velario.png",
    url: "",
  },
  {
    title: "boutique chamsou",
    description: "Mobile ",
    id: 2,
    icon: [
      { icon: SiMongodb, name: "mongoDB" },
      { icon: SiNextdotjs, name: "nextJS" },
      { icon: SiTailwindcss, name: "taiwlind" },
    ],
    url: "",
    img: "/chamsoubou.png",
  },
  // {
  //   title: "Promptopia",
  //   description: "Website",
  //   id: 3,
  //   icon: [{ icon: SiMongodb }, { icon: SiNextdotjs }, { icon: SiTailwindcss }],
  //   img: "",
  //   url: "",
  // },
  {
    title: "Lumevo",
    description: "UI/UX, Mobile",
    id: 4,
    icon: [
      { icon: SiFigma, name: "figma" },
      { icon: SiReact, name: "reactJS" },
      { icon: SiTailwindcss, name: "taiwlind" },
    ],
    img: "/chamsou.png",
    url: "",
  },
  {
    title: "LighTravel",
    description: "UI/UX",
    id: 5,
    icon: [{ icon: SiFigma, name: "figma" }],
    img: "/travelapp.png",
    url: "",
  },
  // {
  //   title: "velario",
  //   description: "ui/ux",
  //   id: 1,
  //   icon: [{ icon: SiFigma }],
  //   img: "",
  // },
];
