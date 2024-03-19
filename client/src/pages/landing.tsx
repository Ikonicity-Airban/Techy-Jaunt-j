import { Spinner } from 'flowbite-react';
import logo from '../assets/images/logo.svg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Loading() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() =>
            navigate("/onboarding", {
                replace: true
            }), 3000)
    }, [navigate])

    return (
        <main className="w-full min-h-screen bg-primary flex items-center flex-col justify-center transition-fade">
            <article className="flex items-center w-2/3 object-contain my-4 flex-[1] justify-center">
                <img src={logo} alt="logo" />
            </article >
            <div className="flex-[0.2]">
                <Spinner />
            </div>
            <footer className="text-center text-sm flex-[0.1] text-light">© Team J - Campus sync app</footer>
        </main>
    )
}

