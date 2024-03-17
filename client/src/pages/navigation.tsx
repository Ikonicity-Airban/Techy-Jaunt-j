import { Button, Card, Label, Select } from "flowbite-react";
import { PiCrosshairDuotone, PiMapPinLineDuotone } from "react-icons/pi";

import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const navForm = [
    {
        title: "Location (from)",
        name: "location",
        icon: PiMapPinLineDuotone,
        options: [
            {
                title: "One",
                value: "two",
            },
        ],
    },
    {
        title: "Destination (to)",
        name: "location",
        icon: PiCrosshairDuotone,
        options: [
            {
                title: "One",
                value: "two",
            },
        ],
    },
];

interface NavigationObjProps {
    location: string
    destination: string
    duration: {
        foot?: number;
        bike?: number;
        car?: number;
    }
}

export default function NavigationPage() {

    const [processedNavigation, setProcessedNavigation] = useState<NavigationObjProps>(

        {
            destination: "Umuyi Hostel",
            location: "Main Administration Building",
            duration: {
                foot: 40 * 60 * 1000,
                bike: 18 * 60 * 1000,
                car: 6 * 60 * 1000,
            }
        })

    const [processed, SetProcessed] = useState(true)

    const NavForm = () => {
        return (
            <form action="" className="p-6 space-y-10">
                {navForm.map(({ name, title, options, icon }) => (
                    <div key={name} className="space-y-3">
                        <Label className="text-sm px-2">{title}</Label>
                        <Select name={name} icon={icon}>
                            <option disabled selected>
                                Choose your location
                            </option>
                            {options.map((option) => (
                                <option
                                    key={option.title + option.value}
                                    {...option}
                                    className="capitalize"
                                >
                                    {option.title}
                                </option>
                            ))}
                        </Select>
                    </div>
                ))}
                <Button gradientMonochrome="teal" className='my-10' color="red-100" fullSized >
                    <span className=''>Locate </span>
                    <IoSearch className='ml-3' />
                </Button>
            </form>
        );
    };

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
                    <Card></Card>
                </div>
                <div>

                </div>
            </section>)
    }

    return (
        <div className="p-6">
            {processed ?
                <ProcessedNavigationScreen navigation={processedNavigation}></ProcessedNavigationScreen>
                :
                <NavForm />

            }
        </div>
    );
}
