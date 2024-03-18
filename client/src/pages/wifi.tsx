import { BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdNetworkWifi3Bar } from "react-icons/md";

const WifiCard = () => {
  return (
    <Link to={"/wifi/ste-fo"}>
      <div className="border-b-2 border-gray-300 p-3 shadow-md flex h-32 rounded-lg">
        <img src="/vite.svg" alt="" className="flex-1" />
        <div className="grid gap-4 p-2 text-sm">
          <h3 className="text-lg capitalize font-semibold">Ste-fo</h3>
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <BsClock />
              <p>9-11pm</p>
            </div>
            <div className="flex items-center gap-2">
              <MdNetworkWifi3Bar />
              <p>9km</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function WifiPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl capitalize text-center mb-10 font-semi  bold">wifi spots</h1>
      <div className="grid my-2 gap-4">
        <WifiCard />
        <WifiCard />
        <WifiCard />
        <WifiCard />
      </div>
    </div>
  );
}
