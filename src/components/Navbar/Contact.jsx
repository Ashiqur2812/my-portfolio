import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.svg
                    className="absolute bottom-0 left-0 w-full h-auto opacity-30"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    animate={{ y: [0,20, 0] }} // Subtle floating effect
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <path
                        fill="#00c6ff"
                        fillOpacity="1"
                        d="M0,192L48,208C96,224,192,256,288,266.7C384,277,480,267,576,256C672,245,768,235,864,229.3C960,224,1056,224,1152,234.7C1248,245,1344,267,1392,277.3L1440,288V320H0Z"
                    ></path>
                </motion.svg>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl font-bold text-center mb-6"
                >
                    Let's <span className="text-sky-400">Collaborate</span> 🚀
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-lg text-center text-gray-300 mb-10"
                >
                    Reach out today and let's build something amazing together! 💡
                </motion.p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    {/* Contact Form */}
                    <motion.div
                        className="w-full md:w-2/3 bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-gray-500"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <form action="https://getform.io/f/azyykvqb" method="POST">
                            <div className="mb-6">
                                <label className="text-gray-200 font-semibold">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full p-3 mt-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label className="text-gray-200 font-semibold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full p-3 mt-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label className="text-gray-200 font-semibold">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    className="w-full p-3 mt-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full bg-gradient-to-r from-sky-500 to-teal-500 text-white py-3 rounded-lg hover:from-teal-500 hover:to-sky-500 transition-all duration-500 shadow-lg hover:shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message 📨
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Social Media Links */}
                    <motion.div
                        className="w-full md:w-1/3 text-center md:text-left"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-3xl font-semibold text-gray-200 mb-4">Let's Connect 🌐</h3>
                        <p className="text-gray-400 mb-6">Feel free to reach out via email or social media.</p>

                        <div className="flex justify-center md:justify-start gap-6 text-3xl">
                            <motion.a
                                href="mailto:ashiqur2812@gmail.com"
                                className="hover:text-sky-500 transition"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                            >
                                <FaEnvelope />
                            </motion.a>
                            <motion.a
                                href="https://github.com/ashiqur2812"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-sky-500 transition"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                            >
                                <FaGithub />
                            </motion.a>
                            <motion.a
                                href="https://twitter.com/ashiqur2812"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-sky-500 transition"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                            >
                                <FaTwitter />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
