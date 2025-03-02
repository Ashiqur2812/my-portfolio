import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import image from '../../assets/logo.webp';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full px-6 lg:px-12 py-4 lg:py-4 flex justify-between items-center z-50 transition-all duration-500 
       bg-gradient-to-r from-gray-900 to-gray-800  text-white backdrop-blur-md bg-opacity-90 `}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Logo */}
            <motion.div
                className="text-3xl flex items-center font-bold tracking-wide cursor-pointer select-none"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
            >
                <img
                    className="mr-4 rounded-lg hover:animate-spin"
                    height={60}
                    width={60}
                    src={image}
                    alt="Logo"
                />
                <Link to="home" smooth duration={500}>
                    <span className="bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent">
                        Ashiqur Rahman
                    </span>
                </Link>
            </motion.div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 text-lg">
                {navLinks.map((item, index) => (
                    <motion.li
                        key={index}
                        className="relative group cursor-pointer hover:text-pink-500 transition duration-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Link to={item.toLowerCase()} smooth duration={500}>
                            {item}
                        </Link>
                        <span className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 w-0 group-hover:w-full transition-all duration-300"></span>
                    </motion.li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-2xl"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className={`absolute top-16 left-0 w-full bg-gradient-to-br from-gray-900 to-black text-white shadow-lg p-5 flex flex-col items-center space-y-4 text-lg md:hidden rounded-xl`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                    >
                        {navLinks.map((item, index) => (
                            <motion.a
                                key={index}
                                className="cursor-pointer hover:text-pink-500 transition duration-300"
                                whileHover={{ scale: 1.1 }}
                                onClick={() => setMenuOpen(false)}
                            >
                                <Link to={item.toLowerCase()} smooth duration={500}>
                                    {item}
                                </Link>
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;