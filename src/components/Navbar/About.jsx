import { motion } from "framer-motion";
import image from '../../assets/Firefly 20250210155735.png'; // Replace with a high-quality professional photo
import Typewriter from "react-typewriter-effect";

const About = () => {
    return (
        <section id="about" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-12"
                >
                    About <span className="text-teal-400">Me</span> 🧑‍💻
                </motion.h2>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left Side - Image with Cool Effects */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/3 relative"
                    >
                        {/* Glowing Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-sky-500 rounded-lg blur-md opacity-30 animate-pulse"></div>
                        {/* Image Container */}
                        <motion.div
                            className="relative w-64 h-84 mx-auto rounded-lg overflow-hidden border-4 border-teal-400 shadow-2xl"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img
                                src={image}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                            {/* Glow Effect on Hover */}
                            <motion.div
                                className="absolute inset-0 bg-teal-300 opacity-0 hover:opacity-20 transition-opacity duration-300"
                                whileHover={{ opacity: 0.2 }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-2/3 text-center md:text-left"
                    >
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Hello! I'm{" "}
                            <span className="text-teal-400 font-semibold">Ashiqur Rahman</span>, a passionate and self-taught{" "}
                            <Typewriter
                                text="Frontend Developer �"
                                cursorColor="#2DD4BF"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delay={1000}
                                loop={0}
                            />{" "}
                            who fell in love with coding while exploring the endless possibilities of the web. My journey hasn't been easy, but every challenge has shaped me into the developer I am today.
                        </p>
                        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                            I started with zero knowledge, spending countless nights debugging code, watching tutorials, and reading documentation. Over time, I mastered{" "}
                            <span className="text-teal-400 font-semibold">React.js</span>,{" "}
                            <span className="text-teal-400 font-semibold">Tailwind CSS</span>, and{" "}
                            <span className="text-teal-400 font-semibold">JavaScript</span>, and now I take pride in building clean, efficient, and responsive user interfaces. My goal is simple:{" "}
                            <span className="text-teal-400 font-semibold">"Crafting pixels with purpose, breathing life into code,
                                Where React weaves magic, and smooth UIs unfold.
                                From concept to creation, every line I refine,
Building the future, one component at a time."</span> 💻
                        </p>
                        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                            What drives me is my <span className="text-teal-400 font-semibold">curiosity</span> and <span className="text-teal-400 font-semibold">dedication</span>. I'm always eager to learn new technologies and improve my skills. In my free time, you'll find me browsing YouTube for the latest tech trends, experimenting with new tools, or contributing to open-source projects.
                        </p>
                        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                            Beyond coding, I have a deep interest in <span className="text-teal-400 font-semibold">exploring the truth of the Quran and Hadith</span>. I spend time reading religious books and sharing their teachings with others. This not only keeps me grounded but also inspires me to approach life with patience, humility, and a problem-solving mindset.
                        </p>
                        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                            I also enjoy <span className="text-teal-400 font-semibold">traveling to new places ✈️</span>, meeting new people, and experiencing different cultures. These experiences broaden my perspective and help me think creatively, which I bring into my work as a developer.
                        </p>
                        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                            I'm not just looking for a job; I'm looking for a place where I can grow, contribute, and make a difference. If you're searching for someone who is <span className="text-teal-400 font-semibold">dedicated, eager to learn, and passionate about technology</span>, I'd love to connect! 🚀
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;