import { Spinner } from 'flowbite-react';
import logo from '../../assets/images/logo.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Loading() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() =>
            navigate("/onboarding/page-2"), 3000)
    }, [navigate])

    return (
        <main className="w-full min-h-[85vh] flex items-center flex-col justify-center transition-fade">
            <article className="flex items-center w-1/3 object-contain my-4 flex-1 justify-center">
                <img src={logo} className="" alt="logo" />
            </article>
            <Spinner />
        </main>
    )
}

