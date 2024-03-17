import './App.css'

import { Avatar, Button, Card, Navbar, Sidebar, TextInput } from 'flowbite-react';
import { PiKeyDuotone, PiMapPinDuotone, PiNewspaperClippingDuotone, PiShoppingCartDuotone, PiUserCircleDuotone, PiWifiMediumDuotone } from 'react-icons/pi';

import { CiBellOn } from 'react-icons/ci'
import { HiArrowRight } from 'react-icons/hi';
import { HiBars4 } from 'react-icons/hi2'
import { IoIosLogOut } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import accmImg from '../assets/images/frame 57.svg';
import { truncateString } from '../app/lib/helper';
import { useState } from 'react'

const sidebarLinks = [
  {
    name: "Profile",
    link: "/profile",
    icon: PiUserCircleDuotone
  },
  {
    name: "Accommodation",
    link: "/accommodation",
    icon: PiKeyDuotone
  },
  {
    name: "Navigation",
    link: "/navigation",
    icon: PiMapPinDuotone
  },
  {
    name: "Free Wifi",
    link: "/free-wifi",
    icon: PiWifiMediumDuotone
  },
  {
    name: "Market Place",
    link: "/market-place",
    icon: PiShoppingCartDuotone
  },
  {
    name: "News Update",
    link: "/news-update",
    icon: PiNewspaperClippingDuotone
  },
  {
    name: "Logout",
    link: "/login",
    icon: IoIosLogOut
  },
]


const categoryData = [
  {
    title: "Accommodation",
    link: "/accommodation",
    img: accmImg
  },
  {
    title: "Navigation",
    link: "/navigation",
    img: ""
  },
  {
    title: "Free Wifi",
    link: "/free-wifi",
    img: ""
  },
  {
    title: "Market Space",
    link: "/market-space",
    img: ""
  }
]

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (


    <div className="App">
      <header >
        <Navbar className='p-4 bg-beige'>
          <div className="inline-block item-end text-sm">
            <Avatar rounded className='w-fit'>
            </Avatar>
            <p className='text-xs p-2'>Good Morning! Greatness</p>
          </div>
          <Navbar.Toggle barIcon={HiBars4} onClick={toggleMenu} />
        </Navbar>

        <div className='p-3 flex items-center justify-between'>
          <TextInput type='search' icon={IoSearchOutline} className='flex-[0.9]' />
          <div>
            <CiBellOn size={30} />
          </div>
        </div>
      </header>
      <Sidebar className='fixed top-0 z-[99] bg-transparent p-0  transition-transform' style={{
        transform: !isMenuOpen ? 'translateX(-100%)' : 'translateX(0)',
      }}>

        <Sidebar.CTA >
          <Avatar rounded img="/vite.svg" bordered size="lg" />
        </Sidebar.CTA>
        <Sidebar.Items className=''>
          <Sidebar.ItemGroup className='text-white'>
            {sidebarLinks.map(({ name, icon, link }) => (
              <Sidebar.Item key={link} icon={icon} className="p-4" style={{
              }} >{name}</Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      <main onClick={() => setIsMenuOpen(false)} className='p-4 font-sans'>
        <div>
          <div className="flex p-2">
            <div className="flex-1 space-y-3">
              <h3 className='font-semibold text-gray-800'>Latest News</h3>
              <div className="rounded-lg flex flex-col gap-3 bg-gradient-to-br from-teal-700 to-blue-900 p-3">
                <h2 className='text-transparent bg-clip-text  bg-gradient-to-br from-yellow-500 to-red-500 text-xl font-semibold'>Graduation Graduation</h2>
                <p className='text-sm text-gray-100'>{truncateString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maiores cumque distinctio, quis itaque, totam porro obcaecati aliquam quam iure soluta amet eos, illum ipsa unde. Eos quidem voluptatibus aperiam.", 100)}</p>
                <Button gradientMonochrome="teal" className='w-fit' size="sm">
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
            <h3 className='font-medium p-2'>Categories</h3>
            <article className="grid grid-cols-2 gap-4">
              {categoryData.map(({ img, link, title }) =>
                <Link to={link} className="">
                  <Card className='h-32'>
                    <img src={img} alt="" className='' />
                    <h3 className='w-full z-1 text-center'>{title}</h3>
                  </Card>
                </Link>
              )}
            </article>
          </section>
        </div>
      </main >
    </div >

  )
}

export default HomePage
