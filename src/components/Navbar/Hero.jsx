import { motion } from "framer-motion";
import image from "../../assets/Firefly 20250210155735.png";
import pdf from '../../assets/MERN_CV_Resume.pdf';
import Typewriter from "react-typewriter-effect";

const Hero = () => {
    return (
        <section className="h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-gradient-to-r from-gray-100 to-teal-50 gap-10 pt-80 md:pt-0">
            {/* Left Side - Text */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                    Hi, I'm{" "}
                    <motion.span
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="text-teal-500 inline-block"
                    >
                        Ashiqur Rahman
                    </motion.span>{" "}
                    👋
                </h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg md:text-2xl font-medium text-gray-600 mt-4"
                >
                    A Passionate{" "}
                    <Typewriter
                        text="MERN Stack Developer 🚀"
                        cursorColor="#0D9488"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delay={1000}
                    />
                </motion.p>

                {/* Resume & Social Links */}
                <div className="flex items-center justify-center md:justify-start mt-6 gap-4">
                    <motion.a
                        href={pdf}
                        download="MERN_CV_Resume.pdf"
                        className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition duration-300 flex items-center gap-2"
                        whileHover={{ scale: 1.1, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        📜 Download Resume
                    </motion.a>
                    <div className="flex gap-3">
                        <motion.a
                            href="https://github.com/ashiqur2812"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <img
                                src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
                                alt="GitHub"
                                className="w-8 h-8"
                            />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <img
                                src="https://img.icons8.com/ios-filled/30/0077b5/linkedin.png"
                                alt="LinkedIn"
                                className="w-8 h-8"
                            />
                        </motion.a>
                    </div>
                </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="mt-8 md:mt-0"
            >
                <motion.img
                    src={image}
                    alt="Profile"
                    className="w-48 md:w-64 rounded-full border-4 border-teal-500 shadow-2xl object-cover"
                    whileHover={{ rotate: 10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                />
            </motion.div>
        </section>
    );
};

export default Hero;