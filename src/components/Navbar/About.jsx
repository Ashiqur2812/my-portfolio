import { motion } from "framer-motion";
import image from '../../assets/Firefly 20250210155735.png';
import Typewriter from "react-typewriter-effect";

const About = () => {
    return (
        <section id="about" className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 pt-72 md:pt-0">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-gray-800 text-center mb-8"
                >
                    About <span className="text-blue-500">Me</span> 🧑‍💻
                </motion.h2>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left Side - Image with Blurred Background */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/3"
                    >
                        <div className="relative w-56 h-72 mx-auto">
                            {/* Blurred Background */}
                            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-lg shadow-lg"></div>
                            {/* Image */}
                            <motion.img
                                src={image}
                                alt="Profile"
                                className="absolute inset-0 w-60 h-80 object-cover rounded-lg shadow-lg mx-auto"
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                        </div>
                    </motion.div>

                    {/* Right Side - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-2/3 text-center md:text-left"
                    >
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Hello! This is{" "}
                            <span className="text-blue-500 font-semibold">Ashiqur Rahman</span>, a passionate{" "}
                            <Typewriter
                                text="MERN Stack Developer 🚀"
                                cursorColor="#3B82F6"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delay={1000}
                            />{" "}
                            with a love for crafting visually appealing and interactive web experiences.
                        </p>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            My journey in web development began with curiosity and has evolved into a strong
                            technical skill set in <span className="text-blue-500 font-semibold">React.js</span>,{" "}
                            <span className="text-blue-500 font-semibold">Tailwind CSS</span>, and{" "}
                            <span className="text-blue-500 font-semibold">JavaScript</span>. I enjoy building clean,
                            efficient, and responsive user interfaces. 💻
                        </p>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Beyond coding, I love exploring new technologies, engaging in problem-solving, and
                            continuously learning. In my free time, I enjoy{" "}
                            <span className="text-blue-500 font-semibold">reading religious books 📖, hanging out with friends 👫, and traveling to new places ✈️</span>.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;  