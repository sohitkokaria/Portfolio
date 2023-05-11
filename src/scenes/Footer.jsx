import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const Footer = () => {
    const isSmallScreen = useMediaQuery("(max-width: 700px)");

    return (
        <footer className={`bg-black p-20 ${isSmallScreen && "px-6"} pb-0 text-white`}>
            <div className={`${isSmallScreen ? "flex flex-col gap-14" : "flex "}`}>
                <div className="flex-1 space-y-5">
                    <h2 className="text-xl font-bold">SOHIT KOKARIA</h2>
                    <p className="block text-sm">
                        A skilled full stack web developer with a strong foundation in programming
                        fundamentals and experience in building interactive web applications.
                    </p>
                </div>
                <div className={`space-y-5 flex-1 ${!isSmallScreen && "text-right "}`}>
                    <span className="text-xl font-bold">SOCIAL</span>
                    <div className={`text-2xl flex gap-4 ${!isSmallScreen && "justify-end"}`}>
                        <a
                            href="https://www.linkedin.com/in/sohit-kokaria/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/sohitkokaria"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="">
                <p className="text-gray-300 text-xs text-center py-10 mt-20 border border-l-0 border-r-0 border-b-0 border-gray-700">
                    &copy; {new Date().getFullYear()} Made by Sohit Kokaria
                </p>
            </div>
        </footer>
    );
};

export default Footer;
