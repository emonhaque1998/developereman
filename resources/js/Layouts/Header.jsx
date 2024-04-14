"use client";

import { noxfolioUtilits } from "@/Components/utility";
import { Link, Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import MultiMenu, { OnePageMenu } from "./Menu";

const Header = ({ header, onePageMenu, auth }) => {
    switch (header) {
        case 1:
            return <Header1 onePageMenu={onePageMenu} auth={auth} />;
        case 2:
            return <Header2 onePageMenu={onePageMenu} />;

        default:
            return <Header1 onePageMenu={onePageMenu} auth={auth} />;
    }
};
export default Header;

const Header1 = ({ onePageMenu, auth }) => {
    useEffect(() => {
        noxfolioUtilits.stickyNav();
    }, []);

    const toggleSidebar = () => {
        document.querySelector("body").classList.add("side-content-visible");
    };

    const [toggle, setToggle] = useState(false);

    return (
        <header className="main-header menu-absolute">
            {/*Header-Upper*/}
            <div className="header-upper">
                <div className="container container-1620 clearfix">
                    <div className="header-inner rel d-flex align-items-center">
                        <div className="logo-outer">
                            <div className="logo">
                                <Link href="/">
                                    <img
                                        src="assets/images/logos/logo.png"
                                        alt="Logo"
                                        title="Logo"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="nav-outer clearfix mx-auto">
                            {/* Main Menu */}
                            <nav className="main-menu navbar-expand-lg">
                                <div className="navbar-header">
                                    <div className="mobile-logo my-15">
                                        <Link href="/">
                                            <img
                                                src="assets/images/logos/logo.png"
                                                alt="Logo"
                                                title="Logo"
                                            />
                                        </Link>
                                    </div>
                                    {/* Toggle Button */}
                                    <button
                                        type="button"
                                        className="navbar-toggle me-4"
                                        data-bs-toggle="collapse"
                                        data-bs-target=".navbar-collapse"
                                        onClick={() => setToggle(!toggle)}
                                    >
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                </div>
                                <div
                                    className={`navbar-collapse collapse clearfix ${
                                        toggle ? "show" : ""
                                    }`}
                                >
                                    {onePageMenu ? (
                                        <OnePageMenu />
                                    ) : (
                                        <MultiMenu />
                                    )}
                                </div>
                            </nav>
                            {/* Main Menu End*/}
                        </div>
                        {/* Menu Button */}
                        <div
                            className="menu-btns d-none d-lg-block"
                            style={{ marginRight: "10px" }}
                        >
                            {/* menu sidbar */}
                            <div className="menu-sidebar">
                                <button onClick={() => toggleSidebar()}>
                                    <img
                                        src="assets/images/shape/sidebar-tottler.svg"
                                        alt="Toggler"
                                    />
                                </button>
                            </div>
                        </div>

                        {auth.user ? (
                            <Link
                                className="theme-btn"
                                href={route("dashboard")}
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    className="theme-btn"
                                    href={route("login")}
                                >
                                    Log in
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
            {/*End Header Upper*/}
        </header>
    );
};

const Header2 = ({ onePageMenu }) => {
    useEffect(() => {
        noxfolioUtilits.stickyNav();
    }, []);

    const toggleSidebar = () => {
        document.querySelector("body").classList.add("side-content-visible");
    };

    const [toggle, setToggle] = useState(false);

    return (
        <header className="main-header header-two menu-absolute">
            {/*Header-Upper*/}
            <div className="header-upper">
                <div className="container container-1620 clearfix">
                    <div className="header-inner rel d-flex align-items-center">
                        <div className="logo-outer">
                            <div className="logo">
                                <Link href="/">
                                    <img
                                        src="assets/images/logos/logo.png"
                                        alt="Logo"
                                        title="Logo"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="nav-outer clearfix mx-auto">
                            {/* Main Menu */}
                            <nav className="main-menu navbar-expand-lg">
                                <div className="navbar-header">
                                    <div className="mobile-logo my-15">
                                        <Link href="/">
                                            <img
                                                src="assets/images/logos/logo.png"
                                                alt="Logo"
                                                title="Logo"
                                            />
                                        </Link>
                                    </div>
                                    {/* Toggle Button */}
                                    <button
                                        type="button"
                                        className="navbar-toggle me-4"
                                        data-bs-toggle="collapse"
                                        data-bs-target=".navbar-collapse"
                                        onClick={() => setToggle(!toggle)}
                                    >
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                </div>
                                <div
                                    className={`navbar-collapse collapse clearfix ${
                                        toggle ? "show" : ""
                                    }`}
                                >
                                    {onePageMenu ? (
                                        <ul className="navigation onepage clearfix">
                                            <li>
                                                <a href="#home">Home</a>
                                            </li>
                                            <li>
                                                <a href="#about">about</a>
                                            </li>
                                            <li>
                                                <a href="#resume">Resume</a>
                                            </li>
                                            <li>
                                                <a href="#services">services</a>
                                            </li>
                                            <li>
                                                <a href="#skills">skills</a>
                                            </li>
                                            <li>
                                                <a href="#projects">projects</a>
                                            </li>
                                            <li>
                                                <a href="#blog">blog</a>
                                            </li>
                                            <li>
                                                <a href="#contact">Contact</a>
                                            </li>
                                        </ul>
                                    ) : (
                                        <MultiMenu />
                                    )}
                                </div>
                            </nav>
                            {/* Main Menu End*/}
                        </div>
                        {/* Menu Button */}
                        <div className="menu-btns">
                            {/* menu sidbar */}
                            <div className="menu-sidebar d-none d-lg-block">
                                <button onClick={() => toggleSidebar()}>
                                    <img
                                        src="assets/images/shape/sidebar-tottler-white.svg"
                                        alt="Toggler"
                                    />
                                </button>
                            </div>
                            <Link href="contact">
                                <a className="theme-btn"> let,s talk</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Header Upper*/}
        </header>
    );
};
