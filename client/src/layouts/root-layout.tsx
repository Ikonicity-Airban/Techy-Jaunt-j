import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { initJuno } from "@junobuild/core";
import { satellite_string } from "../api/lib/constants";
import { useEffect } from "react";

export default function RootLayout() {
  // TODO: Replace 'satelliteId' with your actual satellite ID
  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: satellite_string,
      }))();
  }, []);
  return (
    <main className="min-h-screen">
      <Toaster
        containerClassName="font-sans"
        toastOptions={{
          duration: 5000,
        }}
      />
      <Outlet />
    </main>
  );
}
