import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaJava,
    FaPython,
    FaDatabase,
    FaGitAlt,
    FaReact,
    FaAws,
    FaAndroid,
    FaNodeJs,
} from "react-icons/fa";
import {
    SiFirebase,
    SiTypescript,
    SiFigma,
    SiChakraui,
    SiOpenai,
    SiTailwindcss,
} from "react-icons/si";
import { FaTasks } from "react-icons/fa";

/* 
    Mapping names to components since we can't store functions in JSON purely if we want it serializable later, 
    but for this architecture, we will export a rich array here. 
*/

export const skillsData = [
    { name: "React 18", icon: FaReact, color: "text-cyan-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Chakra UI", icon: SiChakraui, color: "text-teal-500" },
    { name: "Android", icon: FaAndroid, color: "text-green-500" },
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "Python", icon: FaPython, color: "text-blue-400" },
    { name: "SQL", icon: FaDatabase, color: "text-gray-500" },
    { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
    { name: "AWS", icon: FaAws, color: "text-orange-400" },
    { name: "Figma", icon: SiFigma, color: "text-purple-500" },
    { name: "Git", icon: FaGitAlt, color: "text-red-600" },
    { name: "PMI / Agile", icon: FaTasks, color: "text-blue-800" },
    { name: "AI / Data", icon: SiOpenai, color: "text-green-600" },
];
