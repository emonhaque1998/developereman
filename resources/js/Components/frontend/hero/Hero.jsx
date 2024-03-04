import { useState } from "react";

export default function Hero() {
    const [activeTabs, setActiveTabs] = useState(1);
    const emonhandler = (tabNumber) => {
        setActiveTabs(tabNumber);
    };
    return (
        <div className="container mx-auto flex flex-col place-content-center place-items-center">
            <div className=" md:mt-5">
                <h1 className="text-center text-cyan-300 text-7xl font-heading">
                    Developer
                </h1>
            </div>
            <div className="flex justify-between items-center w-full flex-col lg:flex-row flex-wrap">
                <div className="flex-auto w-1/2 lg:w-1/4 flex justify-center mt-5 lg:mt-0">
                    <div className="flex flex-col border-4 w-2/3 px-4 overflow-hidden py-8 big-corner outline outline-cyan-300">
                        <div className="w-14 lg:w-20 rounded-full self-center overflow-hidden border border-cyan-300">
                            <img
                                className="object-cover w-full h-full"
                                src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                            />
                        </div>
                        <h1 className="text-white text-md lg:text-lg self-center">
                            Eman H.
                        </h1>
                        <p className="text-white text-md self-center">
                            Full-stack developer
                        </p>
                        <ul className="flex flex-col items-start mt-5 text-sm">
                            <li className="flex items-center gap-2">
                                <div className="">
                                    <svg
                                        className="h-4 w-4 text-cyan-300"
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
                                <div className="text-white">
                                    <p>freelancereman.h@gmail.com</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="">
                                    <svg
                                        className="h-4 w-4 text-cyan-300"
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
                                <div className="text-white">
                                    <p>freelancereman.h@gmail.com</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="">
                                    <svg
                                        className="h-4 w-4 text-cyan-300"
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
                                <div className="text-white">
                                    <p>freelancereman.h@gmail.com</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="">
                                    <svg
                                        className="h-4 w-4 text-cyan-300"
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
                                <div className="text-white">
                                    <p>freelancereman.h@gmail.com</p>
                                </div>
                            </li>
                        </ul>
                        <ul className="flex gap-1 justify-between items-center mt-5">
                            <li className=" bg-cyan-300 px-2 rounded-full text-sm">
                                HTML
                            </li>
                            <li className=" bg-cyan-300 px-2 rounded-full text-sm">
                                CSS
                            </li>
                            <li className=" bg-cyan-300 px-2 rounded-full text-sm">
                                JS
                            </li>
                            <li className=" bg-cyan-300 px-2 rounded-full text-sm">
                                REACT
                            </li>
                        </ul>
                        <div className="flex justify-center items-center mt-3">
                            <button className="bg-cyan-300 py-2 px-4 rounded-full flex gap-2">
                                Download CV
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-auto w-full gap-16 py-5 lg:py-0 lg:gap-0 lg:w-2/3">
                    <div className="flex-auto">
                        <span className="text-cyan-300 text-lg">
                            &lt;h1&gt;
                        </span>
                        <div className="ml-12 text-white text-4xl">
                            <h1>Hey</h1>
                            <h1>
                                I'm <span className="text-cyan-300">Eman</span>,
                            </h1>
                            <h1>
                                Full-Stack Developer{" "}
                                <span className="text-cyan-300 text-lg">
                                    &lt;/h1&gt;
                                </span>
                            </h1>
                        </div>

                        <div className="mt-5">
                            <span className="text-cyan-300 text-md">
                                &lt;p&gt;
                            </span>
                            <div className="ml-5 text-white">
                                <p>
                                    I help business grow by crafting amazing web
                                    experiences. If you’re looking for a
                                    developer that likes to get stuff done,
                                </p>
                            </div>
                            <span className="text-cyan-300 text-md">
                                &lt;/p&gt;
                            </span>
                        </div>
                        <div className="flex gap-3 items-center mt-5">
                            <h1 className="text-cyan-300 text-xl font-semibold">
                                Let's Talk
                            </h1>
                            <div className=" bg-gray-600 p-2 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-cyan-300"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex-auto w-1/5 flex justify-end">
                        <div className="bg-gray-900 w-44 flex justify-center py-12 drop-shadow-md rounded-full">
                            <ul className="flex flex-col gap-10">
                                <li className="flex gap-2 items-center">
                                    <h1 className="text-5xl text-cyan-300">
                                        4
                                    </h1>
                                    <div className="text-white text-sm">
                                        <h1>Programming</h1>
                                        <h1>Language</h1>
                                    </div>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <h1 className="text-5xl text-cyan-300">
                                        4
                                    </h1>
                                    <div className="text-white text-sm">
                                        <h1>Development</h1>
                                        <h1>Tools</h1>
                                    </div>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <h1 className="text-5xl text-cyan-300">
                                        4
                                    </h1>
                                    <div className="text-white text-sm">
                                        <h1>Years of</h1>
                                        <h1>Experience</h1>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden absolute left-5 top-1/3 border md:flex lg:flex flex-col gap-3 w-10 rounded-2xl  items-center">
                <div
                    className={`flex justify-center items-center ${
                        activeTabs === 1 ? "bg-white" : "bg-transparent"
                    } rounded-full w-7 h-7 mt-2 cursor-pointer`}
                    onClick={() => emonhandler(1)}
                >
                    <svg
                        className={`h-4 w-4 ${
                            activeTabs === 1 ? "text-black" : "text-white"
                        } inline-block`}
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
                <div
                    className={`flex justify-center items-center ${
                        activeTabs === 2 ? "bg-white" : "bg-transparent"
                    } rounded-full w-7 h-7 mt-2 cursor-pointer mb-2`}
                    onClick={() => emonhandler(2)}
                >
                    <svg
                        className={`h-4 w-4 ${
                            activeTabs === 2 ? "text-black" : "text-white"
                        } inline-block`}
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
    );
}
