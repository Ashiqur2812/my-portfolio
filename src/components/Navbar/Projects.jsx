import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "DreamWell - Real Estate Platform",
        description: "A MERN stack real estate platform with user roles, property listings, payments, and authentication.",
        image: "https://i.ibb.co/CK81j9wv/image.png",
        liveLink: "https://auth-moha-milon-76938.web.app",
        repoLink: "https://github.com/Ashiqur2812/real-estate-client"
    },
    {
        id: 2,
        title: "Food Kingdom - Restaurant Website",
        description: "A feature-rich restaurant platform with real-time ordering, menu management, and dynamic UI.",
        image: "https://i.ibb.co/bj7XkZHy/image.png",
        liveLink: "https://restaurant-project-virid.vercel.app",
        repoLink: "https://github.com/Ashiqur2812/restaurant-management-client"
    },
    {
        id: 3,
        title: "CareerField - Career Management Website",
        description: "A smart career guidance platform with personalized job suggestions and resume-building tools.",
        image: "https://i.ibb.co/nNd4VFzs/image.png",
        liveLink: "https://career-field.web.app",
        repoLink: "https://github.com/Ashiqur2812/career-field"
    }
];

// Floating effect for images
const floatVariants = {
    hover: { y: -8, scale: 1.05, transition: { duration: 0.5, ease: "easeOut" } },
    initial: { y: 0, scale: 1 }
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-6 md:px-16 lg:px-24">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl font-extrabold text-center mb-16 tracking-wide"
                >
                    My <span className="text-sky-500">Projects</span> 🚀
                </motion.h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="relative group bg-white/10 rounded-3xl p-5 shadow-xl transition-all overflow-hidden"
                            whileHover="hover"
                            initial="initial"
                        >
                            {/* Project Image */}
                            <motion.div variants={floatVariants} className="relative overflow-hidden rounded-xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                {/* Overlay Effect */}
                                <motion.div
                                    className="absolute inset-0 transition-all duration-500"
                                />
                            </motion.div>

                            {/* Project Details */}
                            <div className="p-6 text-center">
                                <motion.h3
                                    className="text-2xl font-semibold mb-3"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {project.title}
                                </motion.h3>
                                <motion.p
                                    className="text-gray-300"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {project.description}
                                </motion.p>

                                {/* Buttons */}
                                <div className="mt-5 flex flex-wrap justify-center gap-6">
                                    <motion.a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative px-8 py-3 text-white text-lg font-semibold tracking-wide rounded-xl 
                    bg-gradient-to-r from-sky-500 to-teal-500 shadow-lg
                hover:shadow-sky-500/50 hover:-translate-y-1 transition-all   duration-300
                    before:absolute before:inset-0 before:bg-white/20  before:opacity-0 
                    hover:before:opacity-100 hover:scale-105"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        🚀 Live Demo
                                    </motion.a>

                                    <motion.a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative px-8 py-3 border-2 border-teal-500 text-teal-500 text-lg font-semibold 
                                tracking-wide rounded-xl bg-white shadow-lg hover:bg-teal-500 hover:text-white 
                                transition-all duration-300 hover:-translate-y-1 hover:shadow-teal-500/50 
                                before:absolute before:inset-0 before:bg-white/20 before:opacity-0 
                                hover:before:opacity-100 hover:scale-105"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        🛠️ GitHub
                                    </motion.a>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
