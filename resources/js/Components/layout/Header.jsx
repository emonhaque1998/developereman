import { Head, Link } from "@inertiajs/react";
import { FaGithub } from "react-icons/fa";

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
        <div className="container mx-auto">
            <div className="flex flex-row justify-between">
                <div>
                    <img
                        className="w-20"
                        src="./assets/images/logo.png"
                        alt=""
                    />
                </div>
                <div className="flex flex-row items-center gap-5">
                    <ul className="flex flex-row gap-10">
                        {navItems.map((item) => (
                            <li>
                                <Link
                                    key={item.name}
                                    className="font-thin"
                                    href={item.ulr}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex flex-row gap-3">
                        <li>
                            <a href="" className="text-2xl">
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-2xl">
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-2xl">
                                <FaGithub />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
