import { Head, Link } from "@inertiajs/react";
import { FaGithub } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const navItems = [
    {
        name: "Home",
        ulr: "",
    },
    {
        name: "About",
        ulr: "",
    },
    {
        name: "Service",
        ulr: "",
    },
    {
        name: "Contact",
        ulr: "",
    },
];
export default function Header() {
    return (
        <div className="py-5">
            <div className="container mx-auto max-md:px-5">
                <div className="flex flex-row justify-between">
                    <div className="w-1/2">
                        <img
                            className="w-20 max-md:w-14"
                            src="./assets/images/logo.png"
                            alt=""
                        />
                    </div>
                    <div className="w-1/2 flex flex-row items-center justify-end">
                        <IoMenu className="text-xl cursor-pointer" />
                    </div>
                    <div className="flex flex-row items-center gap-5 w-1/2 max-md:hidden">
                        <ul className="flex flex-row gap-10">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        className="font-thin text-[#666666]"
                                        href={item.ulr}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-row gap-3 max-md:hidden">
                            <li>
                                <a
                                    href=""
                                    className="font-thin bg-black px-3 py-2 rounded-full text-white"
                                >
                                    Client Area
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-2xl text-[#666666]">
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-2xl text-[#666666]">
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-2xl text-[#666666]">
                                    <FaGithub />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
