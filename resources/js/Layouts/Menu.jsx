import { Link, Head } from "@inertiajs/react";

const DropdownBtn = () => (
    <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
    </div>
);
const MultiMenu = () => {
    return (
        <ul className="navigation clearfix">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">about</Link>
            </li>
            <li>
                <Link href="/service">services</Link>
            </li>
            <li>
                <Link href="/projects">projects</Link>
            </li>
            <li>
                <Link href="/blogs">blog</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    );
};
export default MultiMenu;

export const OnePageMenu = () => {
    return (
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
                <a href="#portfolio">projects</a>
            </li>
            <li>
                <a href="#blog">blog</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    );
};
