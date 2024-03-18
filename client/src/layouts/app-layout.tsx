import { NavLink, NavLinkProps, Outlet } from "react-router-dom";
import { PiHouseDuotone, PiKeyDuotone, PiMapPinDuotone, PiUserCircle, PiWifiMediumDuotone } from "react-icons/pi";

import { Navbar } from "flowbite-react";

const className: NavLinkProps["className"] = ({ isActive }) => isActive ? "text-[#e49f5a]" : "text-white"

const navLinks = [
    {
        icon: PiHouseDuotone,
        name: "home",
        link: "/",
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
            <Outlet />
            <footer className="fixed z-[999] bottom-0 w-full">
                <Navbar className="w-full bg-[#0f3535]" border>
                    {navLinks.map(({ icon, link, name }) => {
                        const Icon = icon;
                        return (
                            <div className="px-2 py-2" key={name}>
                                <NavLink to={link} className={className}>
                                    <Icon size={24} />
                                </NavLink>
                            </div>)
                    })}

                </Navbar>
            </footer>
        </main>
    )
}
