import { Dispatch, SetStateAction } from "react";
import { PiCrosshair, PiMapPinLine } from "react-icons/pi";

import Input from "../Input";
import { IoSearch } from "react-icons/io5";

interface INavFormProps {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
  setDestination: Dispatch<SetStateAction<string>>;
  destination: string;
  onLocate: () => undefined | null;
}

export default function NavForm({
  onLocate,
  destination,
  location,
  setDestination,
  setLocation,
}: INavFormProps) {
  return (
    <form action="" className="mt-4 space-y-10">
      <Input
        icon={<PiMapPinLine />}
        value={location}
        placeholder="Location"
        onChange={(e) => setDestination(e.target.value)}
      />
      <Input
        icon={<PiCrosshair />}
        value={destination}
        placeholder="destination"
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        onClick={onLocate}
        className="btn-neu-pop w-full disabled:bg-gray-400 text-light bg-green-500 active:shadow-none transition-shadow duration-150"
        type="submit"
      >
        <span className="">Locate</span>
        <IoSearch className="ml-3" />
      </button>
    </form>
  );
}
