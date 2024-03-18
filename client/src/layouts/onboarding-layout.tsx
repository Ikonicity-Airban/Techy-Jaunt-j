import { Outlet } from "react-router-dom";

const OnboardingLayout = () => {

    return <>
        <main className="bg-primary text-light  min-h-screen flex flex-col items-center justify-center">
            <div className="flex-1 w-full">
                <Outlet />
            </div>
            <footer className="text-sm py-4">© Team J - campus sync app</footer>
        </main>
    </>;
};

export default OnboardingLayout;