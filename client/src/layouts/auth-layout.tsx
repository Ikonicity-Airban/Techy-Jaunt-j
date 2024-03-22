import { NavLink, Outlet } from "react-router-dom";

import { Logo } from "../components";

function AuthLayout() {

    return (
        <main className="bg-[whitesmoke] min-h-screen w-full" style={{
            fontFamily: "Poppins, verdana"
        }}>
            <div className="max-w-xl mx-auto min-h-[90vh] flex flex-col">

                <header className="p-4 flex flex-col items-center justify-between border-b-[1px] bg- shadow-sm rounded-b-3xl">
                    <div className="my-4">
                        <Logo />
                    </div>
                    <nav className="w-full mt-10 px-2">
                        <div className="w-full flex gap-4 group transition-shadow duration-150" >
                            <NavLink to="/login" replace
                                className={({ isActive }) => isActive ? "text-green-500 btn-neu-bevel w-full" : "btn-neu-pop w-full bg-green-400 text-light text-base"}>
                                Login
                            </NavLink>
                            <NavLink to="/create-account" replace
                                className={({ isActive }) => isActive ? "text-green-500 btn-neu-bevel w-full" : "btn-neu-pop w-full  bg-green-400 text-light text-base"}>
                                Sign up
                            </NavLink>
                        </div>
                    </nav>
                </header>
                <div className="px-6 flex flex-col justify-between">
                    <Outlet />
                </div>
            </div>
            <footer className="text-center text-xs py-4">© Team J - Campus sync app</footer>
        </main>
    )
}

export default AuthLayout