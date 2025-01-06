import { Head, Link } from "@inertiajs/react";
import { FaGithub } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

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
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                    (text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <Link href="/dashboard" className="flex">
                                    <ListItemIcon>
                                        {index % 2 === 0 ? (
                                            <InboxIcon />
                                        ) : (
                                            <MailIcon />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    )
                )}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

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
                    <div className="w-1/2 flex-row max-md:flex items-center justify-end hidden">
                        <div>
                            <Button onClick={toggleDrawer(true)}>
                                <IoMenu className="text-xl cursor-pointer" />
                            </Button>
                            <Drawer open={open} onClose={toggleDrawer(false)}>
                                {DrawerList}
                            </Drawer>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-5 w-1/2 justify-end max-md:hidden">
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
