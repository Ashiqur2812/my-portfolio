import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-gray-800 text-center mb-4"
                >
                    Contact <span className="text-blue-500">Me for Collaboration</span> 🤝
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl font-semibold text-gray-800 text-center mb-8"
                >
                    Reach out today to discuss your project needs and start collaborating on something amazing! 🚀
                </motion.p>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left Side - Contact Form */}
                    <motion.div
                        className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-xl"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <form action="https://getform.io/f/azyykvqb" method="POST">
                            {/* Name Field */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="mb-6"
                            >
                                <label className="text-gray-900 font-semibold">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                                    required
                                />
                            </motion.div>

                            {/* Email Field */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="mb-6"
                            >
                                <label className="text-gray-900 font-semibold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                                    required
                                />
                            </motion.div>

                            {/* Message Field */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="mb-6"
                            >
                                <label className="text-gray-900 font-semibold">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    placeholder="Write your message..."
                                    className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y min-h-32 max-h-80 transition-all"
                                    required
                                ></textarea>
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-lg hover:from-cyan-500 hover:to-teal-500 transition-all duration-500 shadow-lg hover:shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message 📨
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Right Side - Social Media Links */}
                    <motion.div
                        className="w-full md:w-1/3 text-center md:text-left"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Let's Connect 🌐</h3>
                        <p className="text-gray-700 mb-6">Feel free to reach out to me via email or social media. Let's build something awesome together! 🛠️</p>

                        {/* Social Icons */}
                        <div className="flex justify-center md:justify-start gap-6 text-gray-700 text-3xl">
                            <motion.a
                                href="mailto:ashiqur2812@gmail.com"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className="hover:text-blue-500 transition"
                            >
                                <FaEnvelope />
                            </motion.a>
                            <motion.a
                                href="https://github.com/ashiqur2812"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className="hover:text-blue-500 transition"
                            >
                                <FaGithub />
                            </motion.a>
                            <motion.a
                                href="https://twitter.com/ashiqur2812"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className="hover:text-blue-500 transition"
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