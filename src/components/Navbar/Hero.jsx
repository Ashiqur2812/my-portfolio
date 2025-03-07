import { motion } from "framer-motion";
import image from "../../assets/Firefly 20250210155735.png"; 
import pdf from "../../assets/Ashiqur's_Resume.pdf";
import Typewriter from "react-typewriter-effect";

const Hero = () => {
    return (
        <section className="lg:pt-24 xl:pt-16 min-h-screen flex flex-col lg:flex-row items-center justify-around px-6 sm:px-10 md:px-16 bg-gradient-to-r from-gray-900 to-gray-800 gap-10 py-20 lg:py-0">
            {/* Left Side - Text */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left max-w-xl"
            >
                <h1 className="md:p-16 xl:p-0 pt-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                    Hi, I'm{" "}
                    <motion.span
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="text-teal-400 "
                    >
                        Ashiqur Rahman
                    </motion.span>{" "} 
                 
                </h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg sm:text-xl md:text-3xl font-medium text-gray-300 mt-4"
                >
                    A Passionate{" "}
                    <Typewriter
                        text="Frontend Developer 🚀"
                        cursorColor="#2DD4BF"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delay={2000}
                    />
                </motion.p>

                {/* Resume & Social Links */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-6 gap-4">
                    <motion.a
                        href={pdf}
                        download="Frontend_CV_Resume.pdf"
                        className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition duration-300 flex items-center gap-2 text-sm sm:text-base"
                        whileHover={{ scale: 1.1, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        📜 Download Resume
                    </motion.a>
                    <div className="flex gap-3 md:pt-8 pb-12">
                        <motion.a
                            href="https://github.com/ashiqur2812"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <img
                                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png"
                                alt="GitHub"
                                className="w-6 sm:w-8"
                            />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/muhammadashiqurrahman"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <img
                                src="https://img.icons8.com/ios-filled/30/2DD4BF/linkedin.png"
                                alt="LinkedIn"
                                className="w-6 sm:w-8"
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
                className="relative flex justify-center"
            >
                {/* Image with Cool Border Animation */}
                <motion.div
                    className="relative w-48 sm:w-52 md:w-72 lg:w-68 xl:w-72 h-68 sm:h-52 md:h-96 lg:h-96 xl:h-96 rounded-full overflow-hidden border-4 border-teal-400 shadow-2xl"
                    whileHover={{ rotate: 10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <img
                        src={image}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                    {/* Glow Effect */}
                    <motion.div
                        className="absolute inset-0 bg-teal-300 opacity-0 hover:opacity-20 transition-opacity duration-300"
                        whileHover={{ opacity: 0.2 }}
                    />
                </motion.div>

                {/* Floating Circles Animation */}
                <motion.div
                    className="absolute -top-5 sm:-top-8 -left-5 sm:-left-8 w-10 sm:w-16 h-10 sm:h-16 bg-teal-400 rounded-full opacity-20"
                    animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-5 sm:-bottom-8 -right-5 sm:-right-8 w-10 sm:w-16 h-10 sm:h-16 bg-teal-400 rounded-full opacity-20"
                    animate={{ y: [0, 15, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </motion.div>
        </section>
    );
};

export default Hero;
