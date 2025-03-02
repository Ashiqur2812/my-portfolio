import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiFirebase, SiExpress } from "react-icons/si";

const skills = [
    { name: "HTML", icon: FaHtml5, color: "from-red-500 to-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "from-sky-500 to-sky-700" },
    { name: "Tailwind", icon: SiTailwindcss, color: "from-sky-500 to-cyan-500" },
    { name: "JavaScript", icon: SiJavascript, color: "from-yellow-300 to-yellow-400" },
    { name: "React", icon: FaReact, color: "from-sky-400 to-sky-500" },
    { name: "Firebase", icon: SiFirebase, color: "from-yellow-500 to-orange-400" },
    { name: "Node.js", icon: FaNodeJs, color: "from-green-500 to-lime-500" },
    { name: "Express.js", icon: SiExpress, color: "from-lime-500 to-green-500" },
    { name: "MongoDB", icon: SiMongodb, color: "from-green-600 to-green-500" },
];

const floatingAnimations = [
    { y: [0, -10, 0] },
    { y: [0, 10, 0] }
];

const Skills = () => {
    return (
        <section id="skills" className="py-16 md:pb-40 md:pt-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 lg:mb-28">
                    My <span className="text-sky-500">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-6 lg:mb-32">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className={`bg-gradient-to-b ${skill.color} p-6 rounded-2xl shadow-xl w-32 h-32 flex flex-col items-center justify-center`}
                            animate={floatingAnimations[index % 2]}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <skill.icon className="text-5xl text-white mb-2" />
                            <p className="text-white font-semibold">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;