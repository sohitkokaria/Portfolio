import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import profileImage from "../assets/profile-image.jpg";

const Link = ({ style, page }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isHome = pathname === "/";
    const lowerCasePage = page.toLowerCase();
    const href = lowerCasePage === "resume" ? "/resume" : `/#${lowerCasePage}`;

    const linkProps = {
        className: `${style} hover:text-amber-400 transition duration-300 cursor-pointer`,
        onClick: () => navigate(href),
    };

    return [
        !isHome || lowerCasePage === "resume" ? (
            <a {...linkProps} onClick={() => navigate(href)}>
                {page}
            </a>
        ) : (
            <AnchorLink {...linkProps} href={`#${lowerCasePage}`}>
                {page}
            </AnchorLink>
        ),
    ];
};

const Navbar = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isSmallScreen = useMediaQuery("(max-width: 768px)");

    const toggleMenu = () => {
        setIsMenuToggled(!isMenuToggled);
    };

    return (
        <nav className="z-40 w-full fixed top-0 py-6 bg-white shadow-3xl">
            <div className="flex items-center justify-between mx-auto w-5/6">
                <div className="flex gap-3 items-center hover:text-amber-400 transition duration-300 cursor-pointer">
                    <Link page="HOME" style="absolute w-44 h-10 opacity-0"></Link>
                    <img
                        className="w-10 h-10 rounded-full shadow-lg"
                        src={profileImage}
                        alt="Profile Image"
                    />
                    <h4 className="text-lg font-bold ">SOHIT KOKARIA</h4>
                </div>

                {isSmallScreen ? (
                    <button
                        className="flex items-center justify-center focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <i
                            className={`absolute fa-solid fa-bars text-lg transform transition-all duration-500 ${
                                isMenuToggled
                                    ? "opacity-0  rotate-45"
                                    : "opacity-100  rotate-0 delay-100"
                            }`}
                        ></i>
                        <i
                            className={`absolute fa-solid fa-xmark text-xl transform transition-all duration-500 ${
                                isMenuToggled
                                    ? "opacity-100 rotate-0 delay-100"
                                    : "opacity-0 -rotate-45"
                            }`}
                        ></i>
                    </button>
                ) : (
                    <div className="flex justify-between gap-16 font-bold">
                        <Link page="HOME" />
                        <Link page="PROJECTS" />
                        <Link page="CONTACT" />
                        <Link page="RESUME" />
                    </div>
                )}

                {/* Mobile Menu Sidebar*/}
                {isSmallScreen && (
                    <div
                        className={`fixed right-0 bottom-0 top-[76px] h-full bg-white w-64 transition-transform duration-500 ${
                            isMenuToggled ? "translate-x-0" : "translate-x-full"
                        }`}
                    >
                        <div className="grid font-bold bg-white">
                            <div onClick={toggleMenu}>
                                <Link
                                    style="h-[76px] flex pl-8 items-center border-t"
                                    page="HOME"
                                />
                            </div>
                            <div onClick={toggleMenu}>
                                <Link
                                    style="h-[76px] flex pl-8 items-center border-t"
                                    page="PROJECTS"
                                    onClick={toggleMenu}
                                />
                            </div>
                            <div onClick={toggleMenu}>
                                <Link
                                    style="h-[76px] flex pl-8 items-center border-t"
                                    page="CONTACT"
                                    onClick={toggleMenu}
                                />
                            </div>
                            <div onClick={toggleMenu}>
                                <Link
                                    style="h-[76px] flex pl-8 items-center border-t border-b"
                                    page="RESUME"
                                    onClick={toggleMenu}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
