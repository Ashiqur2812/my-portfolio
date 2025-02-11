import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.webp";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolling, setScrolling] = useState(true);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrolling(window.scrollY > 50);
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    const handleScroll = (e) => {
        setScrolling(e.target.documentElement.scrollTop > 50);
    };

    return (
        <motion.nav
            className={`fixed w-full z-10 transition-all duration-300 ${scrolling ? "bg-white bg-opacity-20 backdrop-blur-[6px]" : "bg-gray-900 text-white"}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            onScroll={handleScroll}
        >
            <div className="container mx-auto px-6 py-6 flex justify-between items-center">
                <div className="text-2xl flex items-center gap-x-2 font-bold">
                    <motion.img
                        className="rounded-sm cursor-pointer"
                        width={60}
                        height={60}
                        src={logo}
                        alt="logo"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                        Ashiqur Rahman’s Portfolio
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6">
                    {['about', 'skills', 'projects', 'contact'].map((item) => (
                        <motion.div key={item} whileHover={{ scale: 1.1 }}>
                            <Link
                                to={item}
                                smooth={true}
                                duration={500}
                                className="hover:text-slate-500 cursor-pointer"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Hamburger Icon */}
                <div className="md:hidden">
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            animate={{ rotate: isOpen ? 180 : 0 }}
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </motion.svg>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-gray-800 text-white text-center py-4"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {['about', 'skills', 'projects', 'contact'].map((item) => (
                            <Link
                                key={item}
                                to={item}
                                smooth={true}
                                duration={500}
                                className="block py-2 hover:text-gray-400 cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
