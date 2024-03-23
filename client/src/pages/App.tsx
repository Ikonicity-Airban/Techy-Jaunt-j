import "./App.css";

import { Avatar, Button, Navbar, Sidebar, TextInput } from "flowbite-react";
import {
  PiKeyDuotone,
  PiMapPinDuotone,
  PiNewspaperClippingDuotone,
  PiShoppingCartDuotone,
  PiUserCircleDuotone,
  PiWifiMediumDuotone,
} from "react-icons/pi";

import { Card } from "../components";
import { CiBellOn } from "react-icons/ci";
import { HiArrowRight } from "react-icons/hi";
import { HiBars4 } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import accImg from "../assets/images/accomodation.jpg";
import marketPlaceImg from "../assets/images/market-place.jpg";
import navigationImg from "../assets/images/direction.jpg";
import { signOut } from "@junobuild/core";
import { truncateString } from "../api/lib/helper";
import { useState } from "react";
import wifiImg from "../assets/images/wifi.jpg";

const sidebarLinks = [
  {
    name: "Profile",
    link: "/profile",
    icon: PiUserCircleDuotone,
  },
  {
    name: "Accommodation",
    link: "/accommodation",
    icon: PiKeyDuotone,
  },
  {
    name: "Navigation",
    link: "/navigation",
    icon: PiMapPinDuotone,
  },
  {
    name: "Free Wifi",
    link: "/wifi",
    icon: PiWifiMediumDuotone,
  },
  {
    name: "Market Place",
    link: "/market-place",
    icon: PiShoppingCartDuotone,
  },
  {
    name: "News Update",
    link: "/news-update",
    icon: PiNewspaperClippingDuotone,
  },
];

const categoryData = [
  {
    title: "Accommodation",
    link: "/accommodation",
    img: accImg,
  },
  {
    title: "Navigation",
    link: "/navigation",
    img: navigationImg,
  },
  {
    title: "Wifi",
    link: "/wifi",
    img: wifiImg,
  },
  {
    title: "Market Place",
    link: "/market-place",
    img: marketPlaceImg,
  },
];

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App cabin">
      <header>
        <Navbar className="p-4 bg-beige">
          <div className="inline-block item-end text-sm">
            <Avatar rounded className="w-fit"></Avatar>
            <p className="text-xs p-2">Good Morning! Greatness</p>
          </div>
          <Navbar.Toggle barIcon={HiBars4} onClick={toggleMenu} />
        </Navbar>

        <div className="p-3 flex items-center justify-between">
          <TextInput
            type="search"
            icon={IoSearchOutline}
            className="flex-[0.9]"
          />
          <div>
            <CiBellOn size={30} />
          </div>
        </div>
      </header>
      <Sidebar
        className="fixed top-0 z-[99] bg-transparent p-0  transition-transform"
        style={{
          transform: !isMenuOpen ? "translateX(-100%)" : "translateX(0)",
        }}
      >
        <Sidebar.CTA>
          <Avatar rounded img="/vite.svg" bordered size="lg" />
        </Sidebar.CTA>
        <Sidebar.Items className="justify-between">
          <Sidebar.ItemGroup>
            {sidebarLinks.map(({ name, icon, link }) => (
              <Sidebar.Item key={link} icon={icon} className="p-2">
                {name}
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              key="/"
              icon={IoIosLogOut}
              onClick={signOut}
              className="p-2"
            >
              Logout
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      <main onClick={() => setIsMenuOpen(false)} className="p-4">
        <div>
          <div className="flex p-2">
            <div className="flex-1 space-y-3">
              <h3 className="font-semibold text-gray-800">Latest News</h3>
              <div className="rounded-lg flex flex-col gap-3 bg-gradient-to-br from-teal-700 to-blue-900 p-3">
                <h2 className="text-transparent bg-clip-text  bg-gradient-to-br from-yellow-500 to-red-500 text-xl font-semibold">
                  Graduation Graduation
                </h2>
                <p className="text-sm text-gray-100">
                  {truncateString(
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maiores cumque distinctio, quis itaque, totam porro obcaecati aliquam quam iure soluta amet eos, illum ipsa unde. Eos quidem voluptatibus aperiam.",
                    100
                  )}
                </p>
                <Button gradientMonochrome="teal" className="w-fit" size="sm">
                  <div className="flex items-center gap-3">
                    <span>Read More</span>
                    <HiArrowRight />
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* second part" */}
          <section className="my-10 p-2">
            <h4 className="font-medium p-1 rounded-full shadow-pop my-4 mx-auto logo-clipped text-center">
              Categories
            </h4>
            <article className="grid grid-cols-2 gap-4">
              {categoryData.map(({ img, link, title }) => (
                <Link to={link} className="p-2 shadow-pop rounded-xl">
                  <Card className="h-36 relative group bg-white rounded-xl overflow-hidden">
                    <img
                      src={img}
                      alt=""
                      className="absolute inset-0 group-hover:bg-[size:10rem] h-full object-cover"
                    />
                  </Card>
                  <p className="w-full p-1 shadow-pop rounded-full mt-2 z-1 break-words text-xs text-center z-10 text-green-600">
                    {title}
                  </p>
                </Link>
              ))}
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
