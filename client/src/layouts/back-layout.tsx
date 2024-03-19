import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { IoArrowBack } from 'react-icons/io5'
import { Navbar } from 'flowbite-react'

export default function BackLayout() {
    const pathname = useLocation().pathname.split("/")
    const lastRoute = pathname[pathname.length - 1]
    const navigate = useNavigate()
    return (
        <main className='font-sans bg-beige'>
            <header className='font-sans'>
                <Navbar className='bg-beige py-6 px-4'>
                    <div className="flex items-center gap-6" onClick={() => navigate(-1)} >
                        <Navbar.Toggle barIcon={IoArrowBack} />
                        <p className='capitalize font-medium'>{lastRoute.replace("-", " ")}</p>
                    </div>
                </Navbar>
                <Outlet />
            </header>
        </main>
    )
}
