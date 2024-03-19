import { Checkbox, Label, TextInput } from "flowbite-react";
import { PiClockAfternoon, PiEyeSlashDuotone } from "react-icons/pi";

import { BsPersonWalking } from "react-icons/bs";
import { useParams } from "react-router-dom";

export default function WifiPlace() {
    const { wifiId } = useParams()
    return (
        <>
            <h2 className="text-3xl font-medium px-6 text-center capitalize">
                {wifiId}
            </h2>
            <main className="p-4 space-y-6">
                <div className="space-y-4">
                    <img src="/vite.svg" alt="" className="h-36 w-full object-cover rounded-xl shadow-sm" />
                    <div className="flex gap-3 py-4 justify-between">
                        <div className="flex items-center gap-2">
                            <PiClockAfternoon />
                            <p>9-11pm</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsPersonWalking />
                            <p>9km</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Label className="text-sm">Password</Label>
                    <TextInput className="bg-transparent" type="password" rightIcon={PiEyeSlashDuotone} />
                </div>
                <div className="flex  gap-4 items-center">
                    <Checkbox id="connect_automatically" size={40} />
                    <Label htmlFor="connect_automatically">Connect Automatically</Label>
                </div>
            </main>
        </>
    )
}
