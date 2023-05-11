import React from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/profile-image.jpg";
import { ReactComponent as ExpressJsIcon } from "../assets/icons/expressjs.svg";
import { ReactComponent as MongoDbIcon } from "../assets/icons/mongodb.svg";
import { ReactComponent as ReduxIcon } from "../assets/icons/redux.svg";
import { ReactComponent as TailwindCssIcon } from "../assets/icons/tailwindcss.svg";
import { ReactComponent as FirebaseIcon } from "../assets/icons/firebase.svg";
import { ReactComponent as MUIIcon } from "../assets/icons/mui.svg";
import { ReactComponent as AppsScriptIcon } from "../assets/icons/appsscript.svg";
import { ReactComponent as StyledComponentsIcon } from "../assets/icons/styled-components.svg";
import ResumeFile from "../assets/resume.pdf";

/* 
Colors for dark mode resume
bg: #2b2b2b
text/fill/borders: #dfdfdf
light border: #ffffff3d
*/

const ResumeContent = () => {
    return (
        <div className="w-letter h-letter bg-gray-50 mx-auto p-20 my-100 flex flex-col justify-between drop-shadow-xl">
            {/* HEADER */}
            <div className="flex gap-6 items-center">
                <img
                    className="w-20 h-20 rounded-full shadow-lg"
                    src={profileImage}
                    alt="Project"
                />
                <div className="">
                    <h1 className="text-4xl font-bold">SOHIT KOKARIA</h1>
                    <p className="text-lg">Full Stack Developer</p>
                </div>
            </div>

            {/* CONTACT LINKS */}
            <div className="flex justify-between -5 py-3 border-b border-t border-gray-300">
                <a href="tel:437-970-2416" target="_blank">
                    <div className="flex text-xs font-bold items-center gap-2">
                        <i className="fa-solid fa-phone"></i>
                        <h5>Phone</h5>
                    </div>
                    <span className="text-xs block">437-970-2416</span>
                </a>
                <a href="mailto:sohitkokaria@gmail.com" target="_blank">
                    <div className="flex text-xs font-bold items-center gap-2">
                        <i className="fa-solid fa-envelope"></i>
                        <h5>Email</h5>
                    </div>

                    <span className="text-xs block">sohitkokaria@gmail.com</span>
                </a>
                <a href="https://sohitkokaria.com" target="_blank">
                    <div className="flex text-xs font-bold items-center gap-2">
                        <i className="fa-solid fa-link"></i>
                        <h5>Website</h5>
                    </div>

                    <span className="text-xs block">sohitkokaria.com</span>
                </a>
                <a href="https://www.linkedin.com/in/sohit-kokaria" target="_blank">
                    <div className="flex text-xs font-bold items-center gap-2">
                        <i className="fa-brands fa-linkedin"></i>
                        <h5>LinkedIn</h5>
                    </div>

                    <span className="text-xs block">linkedin.com/in/sohit-kokaria/</span>
                </a>
                <a href="https://www.google.com/maps/place/Metro+Vancouver,+BC" target="_blank">
                    <div className="flex text-xs font-bold items-center gap-2">
                        <i className="fa-solid fa-location-dot"></i>
                        <h5>Location</h5>
                    </div>

                    <span className="text-xs block">Metro Vancouver, BC</span>
                </a>
            </div>

            {/* PROJECTS */}
            <div className="flex justify-between">
                <div className="w-36">
                    <h2 className="text-lg font-bold w-full">PROJECTS</h2>
                </div>
                <div className="max-w-lg space-y-5 border-t border-black pt-5 mt-4">
                    <div>
                        <h3 className="text-md font-bold">Admin Dashboard</h3>
                        <p className="text-xs text-justify">
                            A single-page web app built using MERN stack, MUI, and Nivo, featuring
                            dark and light modes. Admin users can view daily and monthly sales,
                            sales breakdown by category, customer distribution by country on an
                            interactive world map, products by category, and export transactions to
                            CSV files.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-md font-bold">Style Point</h3>
                        <p className="text-xs text-justify">
                            Style Point is a stylish ecommerce store for clothing. Its frontend is
                            built with React, styled components, and MUI, while Stripe ensures
                            secure payment processing. Customers can browse and filter products, add
                            to cart, and checkout with ease. All data is securely stored on a
                            MongoDB database.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-md font-bold">Portfolio and Resume</h3>
                        <p className="text-xs text-justify">
                            This resume and the portfolio website are built using React and Tailwind
                            CSS. The web app is fully responsive and features an easy to navigate
                            design. The projects section showcases my work, highlighting the
                            technologies used for each project, live previews, and access to the
                            source code.
                        </p>
                    </div>
                </div>
            </div>

            {/* SKILLS */}
            <div className="flex justify-between">
                <div className="w-36">
                    <h2 className="text-lg font-bold">SKILLS</h2>
                </div>
                <div className="w-full max-w-lg grid grid-cols-7 gap-y-4 text-center justify-center border-t border-black pt-5 mt-4">
                    <div>
                        <i className="fab fa-html5 text-2xl"></i>
                        <span className="text-xs block">HTML</span>
                    </div>
                    <div>
                        <i className="fab fa-css3-alt text-2xl"></i>
                        <span className="text-xs block">CSS</span>
                    </div>
                    <div>
                        <i className="fab fa-js text-2xl"></i>
                        <span className="text-xs block">JavaScript</span>
                    </div>
                    <div>
                        <i className="fab fa-node-js text-2xl"></i>
                        <span className="text-xs block">Node.js</span>
                    </div>
                    <div>
                        <i className="fab fa-react text-2xl"></i>
                        <span className="text-xs block">React</span>
                    </div>
                    <div>
                        <ExpressJsIcon className="h-8 py-1 w-fit mx-auto" />
                        <span className="text-xs block">Express.js</span>
                    </div>
                    <div>
                        <MongoDbIcon className="h-8 py-1.5 w-fit mx-auto" />
                        <span className="text-xs block">MongoDB</span>
                    </div>
                    <div>
                        <ReduxIcon className="h-8 py-1.5 w-fit mx-auto" />
                        <span className="text-xs block">Redux</span>
                    </div>
                    <div>
                        <TailwindCssIcon className="h-8 w-fit mx-auto" />
                        <span className="text-xs block">Tailwind CSS</span>
                    </div>
                    <div>
                        <MUIIcon className="h-8 py-1.5 w-fit mx-auto" />
                        <span className="text-xs block">MUI</span>
                    </div>
                    <div>
                        <AppsScriptIcon className="h-8 py-1.5 w-fit mx-auto" />
                        <span className="text-xs block">Apps Script</span>
                    </div>
                    <div>
                        <i class="fa-brands fa-git-alt text-2xl"></i>
                        <span className="text-xs block">Git</span>
                    </div>
                    <div>
                        <FirebaseIcon className="h-8 py-1.5 w-fit mx-auto" />
                        <span className="text-xs block">Firebase</span>
                    </div>
                    <div>
                        <StyledComponentsIcon className="h-8 py-1.5 w-fit mx-auto" />
                        <span className="text-xs block leading-3 pt-[2px] -mb-1.5">
                            styled-components
                        </span>
                    </div>
                </div>
            </div>

            {/* EDUCATION */}
            <div className="flex justify-between">
                <div className="w-36">
                    <h2 className="text-lg font-bold w-full">EDUCATION</h2>
                </div>
                <div className="max-w-lg  border-t border-black pt-5 mt-4 space-y-5">
                    <div className="flex">
                        <div className="w-1/4">
                            <p className="text-md font-semibold">2018 - 2020</p>
                            <p className="text-sm">Humber College</p>
                        </div>
                        <div className="w-3/4">
                            <h3 className="text-md font-bold">Computer Programming</h3>
                            <p className="text-xs text-justify">
                                Developed solid foundation in programming fundamentals. Relevant
                                coursework: Framework Programming, Web Programming and Design
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* EXPERIENCE */}
            <div className="flex justify-between">
                <div className="w-36">
                    <h2 className="text-lg font-bold w-full">EXPERIENCE</h2>
                </div>
                <div className="max-w-lg  border-t border-black pt-5 mt-4 space-y-5">
                    <div className="flex">
                        <div className="w-1/4">
                            <p className="text-md font-semibold">2019 - 2020</p>
                            <p className="text-sm">Humber College</p>
                        </div>
                        <div className="w-3/4">
                            <h3 className="text-md font-bold">Senior Peer Mentor</h3>
                            <p className="text-xs text-justify">
                                Built a comprehensive interaction logging system using Google Apps
                                Script, led workshops, organized events, won Senior Peer Mentor of
                                the Year award.
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/4">
                            <p className="text-md font-semibold">2021 - 2022</p>
                            <p className="text-sm">TTEC</p>
                        </div>
                        <div className="w-3/4">
                            <h3 className="text-md font-bold">Customer Service Advocate</h3>
                            <p className="text-xs text-justify">
                                Provided technical support for products to clients, diagnosed and
                                resolved hardware, software, and system failures by following
                                established protocols.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Resume = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-slate-200 px-5 pt-36">
            <div className="overflow-auto">
                <ResumeContent />
            </div>
            <div className="flex flex-wrap justify-center gap-10 py-20">
                <a
                    className="py-4 w-52 rounded text-lg bg-yellow font-bold text-center shadow-lg hover:bg-amber-400 transition duration-300"
                    href={ResumeFile}
                    download="Sohit_Kokaria_Resume.pdf"
                >
                    DOWNLOAD
                </a>
                <button
                    className="py-3 w-52 rounded text-lg border-4 border-yellow font-bold shadow-lg hover:bg-amber-400 hover:border-amber-400 transition duration-300"
                    onClick={() => navigate("/")}
                >
                    GO BACK
                </button>
            </div>
        </div>
    );
};

export default Resume;
