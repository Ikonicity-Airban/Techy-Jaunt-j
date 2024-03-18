import { Button, Label, Select } from 'flowbite-react';
import { PiCrosshairDuotone, PiMapPinLineDuotone } from 'react-icons/pi';

import { IoSearch } from 'react-icons/io5';

interface INavFormProps {
    onLocate: () => (undefined | null)
}

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

export default function NavForm({ onLocate }: INavFormProps) {
    return (
        <form action="" className="mt-4 space-y-10">
            {navForm.map(({ name, title, options, icon }) => (
                <div key={name} className="space-y-3">
                    <Label className="text-sm">{title}</Label>
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
            <Button gradientMonochrome="teal" className='my-10' color="red-100" fullSized onClick={onLocate}>
                <span className=''>Locate </span>
                <IoSearch className='ml-3' />
            </Button>
        </form>
    );
}
