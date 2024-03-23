import { Card, NavModal } from "../../components";

import { IoSearch } from "react-icons/io5";
import { Modal } from "flowbite-react";
import { ProcessedNavigation } from "../../components";
import RecentlyVisited from "./recently-visited";
import useModal from "../../api/hooks/useModal";
import { useState } from "react";

interface NavigationObjProps {
  location: string;
  destination: string;
  duration: {
    foot?: number | string;
    bike?: number | string;
    car?: number | string;
  };
}

export default function NavigationPage() {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const { showModal, hideModal, modalState } = useModal();

  const navbarProps = {
    location,
    setLocation,
    setDestination,
    destination,
  };

  const [processedNavigation, setProcessedNavigation] =
    useState<NavigationObjProps>({
      destination: "",
      location: "",
      duration: {
        foot: 0,
        bike: 0,
        car: 0,
      },
    });

  const handleLocate = () => {
    setProcessedNavigation({
      destination: "Umuyi Hostel",
      location: "Main Administration Building",
      duration: {
        foot: 400 * 60 * 1000,
        bike: 18 * 60 * 1000,
        car: 6 * 60 * 1000,
      },
    });

    hideModal();
    return null;
  };

  return (
    <div className="px-6">
      <Modal show={modalState} onClose={hideModal} popup position="center">
        <Modal.Header>Locate</Modal.Header>
        <Modal.Body>
          <NavModal onLocate={handleLocate} {...navbarProps} />
        </Modal.Body>
      </Modal>

      <div className="my-6 mx-auto w-fit h-full">
        <button className="p-6 shadow-pop rounded-xl" onClick={showModal}>
          <IoSearch className="text-5xl text-green-500" />
        </button>
      </div>
      {processedNavigation.location && (
        <Card className="shadow-bevel p-4 rounded-xl">
          <ProcessedNavigation
            navigation={processedNavigation}
          ></ProcessedNavigation>
        </Card>
      )}

      <div className="my-10">
        <h2 className="text-lg p-2 font-semibold">Recently Located</h2>
          <RecentlyVisited />
      </div>
    </div>
  );
}
