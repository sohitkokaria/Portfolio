import React from "react";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

const Projects = () => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery("(max-width: 900px)");
    return (
        <section
            id="projects"
            className={`flex flex-col bg-slate-50 p-20 gap-20 w-full ${isSmallScreen && "px-5"}`}
        >
            <div>
                <h2 className="text-center font-black text-4xl">PROJECTS</h2>
                {/* <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-36 h-1.5 w-8 bg-yellow rounded-md"></span> */}
                <span id="underline-of-heading" className="absolute left-1/2 transform -translate-x-1/2 translate-y-6 h-1.5 w-8 bg-yellow rounded-md"></span>
                <p className="text-xl text-center mt-12">
                    Take a look at some of my recent projects that are built with the latest tools
                    and technologies
                </p>
            </div>

            {/* Project 1 */}

            <div className="flex max-w-7xl mx-auto items-center flex-wrap">
                <img
                    className={`${
                        isSmallScreen ? "" : "w-3/5"
                    } object-scale-down drop-shadow-lg p-6}`}
                    src={project1}
                    alt="Project image"
                />
                <div
                    className={`${
                        isSmallScreen ? "mt-8 text-center" : "w-2/5"
                    } flex flex-col gap-5 p-6`}
                >
                    <h3 className="font-bold text-3xl">Admin Dashboard</h3>
                    <p className="text-lg">
                        A single-page web app built using MERN stack, MUI, and Nivo, featuring dark
                        and light modes. Admin users can view daily and monthly sales, sales
                        breakdown by category, customer distribution by country on an interactive
                        world map, products by category, and export transactions to CSV files.
                    </p>

                    <div
                        className={`flex mt-3 ${
                            isSmallScreen ? "justify-center flex-wrap gap-5" : "gap-8"
                        }`}
                    >
                        <a
                            className={`py-3 ${
                                isSmallScreen ? "w-36" : "w-40"
                            } rounded bg-yellow text-center font-bold shadow-lg hover:bg-amber-400 transition duration-300`}
                            href="https://admin-dashboard.sohitkokaria.com"
                            target="_blank"
                        >
                            LIVE PREVIEW
                        </a>
                        <a
                            className={`py-3 ${
                                isSmallScreen ? "w-36" : "w-40"
                            } rounded bg-yellow text-center font-bold shadow-lg hover:bg-amber-400 transition duration-300`}
                            href="https://github.com/sohitkokaria/Admin-Dashboard"
                            target="_blank"
                        >
                            SOURCE CODE
                        </a>
                    </div>
                </div>
            </div>

            {/* Project 2 */}

            <div className="flex max-w-7xl mx-auto items-center flex-wrap">
                <img
                    className={`${
                        isSmallScreen ? "" : "w-3/5"
                    } object-scale-down drop-shadow-lg p-6}`}
                    src={project2}
                    alt="Project image"
                />
                <div
                    className={`${
                        isSmallScreen ? "mt-8 text-center" : "w-2/5"
                    } flex flex-col gap-5 p-6`}
                >
                    <h3 className="font-bold text-3xl">Style Point</h3>
                    <p className="text-lg">
                        Style Point is a stylish ecommerce store for clothing. Its frontend is built
                        with React, styled components, and MUI, while Stripe ensures secure payment
                        processing. Customers can browse and filter products, add to cart, and
                        checkout with ease. All data is securely stored on a MongoDB database.
                    </p>

                    <div
                        className={`flex mt-3 ${
                            isSmallScreen ? "justify-center flex-wrap gap-5" : "gap-8"
                        }`}
                    >
                        <a
                            className={`py-3 ${
                                isSmallScreen ? "w-36" : "w-40"
                            } rounded bg-yellow text-center font-bold shadow-lg hover:bg-amber-400 transition duration-300`}
                            href="https://style-point.sohitkokaria.com"
                            target="_blank"
                        >
                            LIVE PREVIEW
                        </a>
                        <a
                            className={`py-3 ${
                                isSmallScreen ? "w-36" : "w-40"
                            } rounded bg-yellow text-center font-bold shadow-lg hover:bg-amber-400 transition duration-300`}
                            href="https://github.com/sohitkokaria/Style-Point"
                            target="_blank"
                        >
                            SOURCE CODE
                        </a>
                    </div>
                </div>
            </div>

            {/* Project 3 */}

            <div className="flex max-w-7xl mx-auto items-center flex-wrap">
                <img
                    className={`${
                        isSmallScreen ? "" : "w-3/5"
                    } object-scale-down drop-shadow-lg p-6}`}
                    src={project3}
                    alt="Project image"
                />
                <div
                    className={`${
                        isSmallScreen ? "mt-8 text-center" : "w-2/5"
                    } flex flex-col gap-5 p-6`}
                >
                    <h3 className="font-bold text-3xl">Portfolio and Resume</h3>
                    <p className="text-lg">
                        This portfolio website and my Resume are built using React and Tailwind CSS.
                        The web app is fully responsive and features an easy to navigate design. The
                        projects section showcases my work, highlighting the technologies used for
                        each project, live previews, and access to the source code.
                    </p>

                    <div
                        className={`flex mt-3 ${
                            isSmallScreen ? "justify-center flex-wrap gap-5" : "gap-8"
                        }`}
                    >
                        <button
                            className={`py-3 ${
                                isSmallScreen ? "w-36" : "w-40"
                            } rounded bg-yellow text-center font-bold shadow-lg hover:bg-amber-400 transition duration-300`}
                            onClick={() => navigate("/resume")}
                        >
                            VIEW RESUME
                        </button>
                        <a
                            className={`py-3 ${
                                isSmallScreen ? "w-36" : "w-40"
                            } rounded bg-yellow text-center font-bold shadow-lg hover:bg-amber-400 transition duration-300`}
                            href="https://github.com/sohitkokaria/Portfolio"
                            target="_blank"
                        >
                            SOURCE CODE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
