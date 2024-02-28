import { useState, useRef } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "@inertiajs/react";

export default function Headers() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="container mx-auto">
            <div className="flex bg-transparent items-center border-b border-cyan-300 py-6 px-3 md:px-0 lg:px-0">
                <div className="flex-1">
                    <Link href="/">
                        <h1 className="text-white text-sm lg:text-lg flex flex-col md:flex-row">
                            <span className="text-cyan-300 font-extrabold">
                                &lt;C /&gt;
                            </span>
                            <span className="font-extrabold">
                                DeveloperEman
                            </span>
                        </h1>
                    </Link>
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-3 lg:gap-10">
                        <ul className="hidden lg:flex gap-3 flex-auto text-gray-300 font-medium justify-end">
                            <li className="hover:text-cyan-300 hover:font-semibold">
                                <a href="">Home</a>
                            </li>
                        </ul>
                        <div className="flex-auto hidden lg:block">
                            <div className="relative">
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-md pl-4 pr-10 py-2 focus:outline-none focus:border-cyan-300"
                                    placeholder="Search"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <svg
                                        className="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="hidden gap-2 md:gap-3 lg:gap-5 md:flex lg:flex flex-auto text-gray-300 justify-end">
                            <a
                                href=""
                                className="hover:text-cyan-300 text-sm lg:text-md"
                            >
                                <div className="flex items-center gap-1">
                                    <FaGithub className="text-cyan-300" />
                                    <span>Github</span>
                                </div>
                            </a>
                            <a href="" className="hover:text-cyan-300">
                                <div className="flex items-center gap-1 text-sm lg:text-md">
                                    <FaLinkedinIn className="text-cyan-300" />
                                    <span>Linkdin</span>
                                </div>
                            </a>
                            <a href="" className="hover:text-cyan-300">
                                <div className="flex items-center gap-1 text-sm lg:text-md">
                                    <FaInstagram className="text-cyan-300" />
                                    <span>Instagram</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
