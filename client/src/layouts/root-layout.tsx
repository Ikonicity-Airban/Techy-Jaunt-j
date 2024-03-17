import { Outlet } from "react-router-dom";
import { initJuno } from "@junobuild/core";
import { useEffect } from "react";

export default function RootLayout() {


    // TODO: Replace 'satelliteId' with your actual satellite ID
    useEffect(() => {
        (async () =>
            await initJuno({
                satelliteId: import.meta.env.VITE_SATELLITE_ID
            }))();
    }, []);
    return (
        <main className="min-h-screen">
            <Outlet />
        </main>
    )
}
