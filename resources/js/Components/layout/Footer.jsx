import { Link } from "@inertiajs/react";
import { FaGithub } from "react-icons/fa";

const footerNavItems = [
    {
        name: "emon",
        ulr: "",
    },
];

export default function Footer() {
    return (
        <div className="py-5">
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
                            {footerNavItems.map((item) => (
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
                        <ul className="flex flex-row gap-3">
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
