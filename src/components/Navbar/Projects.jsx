import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "DreamWell - Real Estate Platform",
        description: "A MERN stack real estate platform with user roles, property listings, payments, and authentication.",
        image: "https://i.ibb.co.com/CK81j9wv/image.png",
        liveLink: "https://auth-moha-milon-76938.web.app",
        repoLink: "#"
    },
    {
        id: 2,
        title: "SportsHeaven - Sports Equipment Store",
        description: "An e-commerce store for sports accessories with Firebase authentication and animated UI.",
        image: "https://i.ibb.co/YTL96gyy/image.png",
        liveLink: "https://sports-heaven.web.app",
        repoLink: "#"
    },
    {
        id: 3,
        title: "CareerField - Career Management Website",
        description: "A career guidance website with personalized job recommendations and profile management.",
        image: "https://i.ibb.co.com/nNd4VFzs/image.png",
        liveLink: "https://career-field.web.app",
        repoLink: "#"
    }
];

const fadeInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 md:px-24 ">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
                    My <span className="text-blue-500">Projects</span>
                </h2>

                <div className="flex flex-col gap-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="w-full flex flex-col lg:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden md:h-[30rem]"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 150 }}
                        >
                            {/* Left Side: Image */}
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="lg:w-3/5 h-full object-cover"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            />

                            {/* Right Side: Project Details */}
                            <div className="p-8 w-full lg:w-1/2 text-center lg:text-left">
                                <motion.h3
                                    className="text-3xl font-semibold text-gray-800"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {project.title}
                                </motion.h3>
                                <motion.p
                                    className="mt-4 text-gray-600"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {project.description}
                                </motion.p>

                                <div className="mt-6 flex justify-center lg:justify-start gap-4">
                                    <motion.a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        Live Demo
                                    </motion.a>
                                    <motion.a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        GitHub
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
