import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

const Landing = () => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery("(max-width: 700px)");

    return (
        <section id="home" className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center w-11/12 gap-16">
                <h1 className={`text-center font-bold ${isSmallScreen ? "text-5xl" : "text-6xl"}`}>
                    HI, I'M SOHIT KOKARIA
                </h1>
                <p className={`text-center max-w-4xl ${isSmallScreen ? "text-xl" : "text-2xl"}`}>
                    A skilled full stack web developer with a strong foundation in programming
                    fundamentals and experience in building interactive web applications.
                </p>
                <div className="flex flex-wrap justify-center gap-10">
                    <button
                        className="py-4 w-52 rounded text-lg bg-yellow font-bold text-center shadow-lg hover:bg-amber-400 transition duration-300"
                        onClick={() => navigate("/resume")}
                    >
                        VIEW RESUME
                    </button>
                    <AnchorLink href="#contact">
                        <button className="py-4 w-52 rounded text-lg bg-yellow font-bold shadow-lg focus:bg-yellow hover:bg-amber-400 transition duration-300">
                            CONTACT ME
                        </button>
                    </AnchorLink>
                </div>
            </div>
        </section>
    );
};

export default Landing;
