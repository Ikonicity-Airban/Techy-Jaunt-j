import { PiCarBold, PiCrosshairDuotone } from "react-icons/pi";

import { BsPersonWalking } from "react-icons/bs";
import { FaBiking } from "react-icons/fa";
import { GoogleMap } from ".";
import { formatTime } from "../app/lib/helper";

interface NavigationObjProps {
    location: string
    destination: string
    duration: {
        foot?: number | string;
        bike?: number | string;
        car?: number | string;
    }
}


const ProcessedNavigationScreen = ({ navigation }: { navigation: NavigationObjProps }) => {
    const { location, destination, duration } = navigation

    return (
        <section className="space-y-10">
            <article className="space-y-4">
                <div className="flex items-center gap-4 border-b-2 border-gray-300">
                    <PiCrosshairDuotone />
                    <input readOnly value={location} className="outline-none p-2 bg-transparent w-full" />
                </div>
                <div className="flex items-center gap-4 border-b-2 border-gray-300">
                    <PiCrosshairDuotone />
                    <input readOnly value={destination} className="outline-none p-2 bg-transparent w-full" />
                </div>
            </article>
            <div className="map">
                <div className="p-2 ring-2 ring-light rounded-md">
                    <GoogleMap query="nigeria"/>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-6">
                    <BsPersonWalking size={26} />
                    <p className="text-[#be763b] font-semibold">{formatTime(duration.foot)}</p>
                </div>
                <div className="flex items-center gap-6">
                    <FaBiking size={26} />
                    <p className="text-[#be763b] font-semibold">{formatTime(duration.bike)}</p>
                </div>
                <div className="flex items-center gap-6">
                    <PiCarBold size={26} />
                    <p className="text-[#be763b] font-semibold">{formatTime(duration.car)}</p>
                </div>
            </div>
        </section>)
}

export default ProcessedNavigationScreen 