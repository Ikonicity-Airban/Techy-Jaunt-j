import { NavLink, NavLinkProps, Outlet } from "react-router-dom";
import { PiHouseDuotone, PiKeyDuotone, PiMapPinDuotone, PiUserCircle, PiWifiMediumDuotone } from "react-icons/pi";

import { Navbar } from "flowbite-react";

const className: NavLinkProps["className"] = ({ isActive }) => isActive ? "inline-flex items-center rounded-lg text-sm p-2 hover:bg-gray-100 focus:outline-none ring-2 ring-[#e49f5a] dark:text-gray-400 hover:bg-gray-700 dark:focus:ring-gray-600 p-1 text-[#e49f5a]" : "text-white p-2"

const navLinks = [
    {
        icon: PiHouseDuotone,
        name: "home",
        link: "/dashboard",
    },
    {
        icon: PiMapPinDuotone,
        name: "navigation",
        link: "/navigation",
    },
    {
        icon: PiKeyDuotone,
        name: "accommodation",
        link: "/accommodation",
    },
    {
        icon: PiWifiMediumDuotone,
        name: "wifi",
        link: "/wifi",
    },
    {
        icon: PiUserCircle,
        name: "profile",
        link: "/profile",
    },
]

export default function AppLayout() {
    return (
        <main className="bg-beige min-h-screen pb-20">
            <div className="max-w-xl mx-auto">
                <Outlet />
                <footer className="fixed z-[999] bottom-0 w-full">
                    <Navbar className=" max-w-xl bg-[#0f3535] shadow-md">
                        {navLinks.map(({ icon, link, name }) => {
                            const Icon = icon;
                            return (
                                <div className="px-2 py-2" key={name}>
                                    <NavLink to={link} className={className}>
                                        <Icon size={24} className="" />
                                    </NavLink>
                                </div>
                            )
                        })}
                    </Navbar>
                </footer>
            </div>
        </main>
    )
}
