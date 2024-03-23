import { NavLink, NavLinkProps, Outlet, useNavigate } from "react-router-dom";
import {
  PiHouseDuotone,
  PiKeyDuotone,
  PiMapPinDuotone,
  PiUserCircle,
  PiWifiMediumDuotone,
} from "react-icons/pi";
import { Suspense, useEffect, useState } from "react";
import { User, authSubscribe } from "@junobuild/core";

import { Navbar } from "flowbite-react";

const className: NavLinkProps["className"] = ({ isActive }) =>
  isActive
    ? "inline-flex items-center rounded-lg text-sm p-2 hover:bg-gray-100 focus:outline-none ring-2 ring-[#e49f5a] dark:text-gray-400 hover:bg-gray-700 dark:focus:ring-gray-600 p-1 text-[#e49f5a]"
    : "text-white p-2";

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
];

export default function AppLayout() {
  const [user, setUser] = useState<User>();

  const navigate = useNavigate();

  useEffect(() => {
    const unSubscribe = authSubscribe((returnedUser) => {
      if (!returnedUser)
        navigate("/onboarding", {
          replace: true,
        });
      setUser(returnedUser);
    });
    return () => unSubscribe();
  });

  if (user)
    return (
      <Suspense
        fallback={
          <div className="grid place-items-center">
            <h4>Loading...</h4>
          </div>
        }
      >
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
                  );
                })}
              </Navbar>
            </footer>
          </div>
        </main>
      </Suspense>
    );

  return (
    <div className="grid place-items-center min-h-screen w-screen">
      <h4 className="btn ">Your are not Logged In</h4>
    </div>
  );
}
