import Landing from "../scenes/Landing";
import Projects from "../scenes/Projects";
import Contact from "../scenes/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [hash]);
    
    return (
        <div>
            <Landing />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
