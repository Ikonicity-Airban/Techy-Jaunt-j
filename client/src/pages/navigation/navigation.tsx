import { Button, Card, Modal, } from "flowbite-react";

import { IoSearch } from "react-icons/io5";
import { NavModal } from "../../components";
import { ProcessedNavigation } from "../../components";
import useModal from "../../api/hooks/useModal";
import { useState } from "react";

interface NavigationObjProps {
    location: string
    destination: string
    duration: {
        foot?: number | string;
        bike?: number | string;
        car?: number | string;
    }
}


export default function NavigationPage() {

    const { showModal, hideModal, modalState } = useModal()

    const [processedNavigation] = useState<NavigationObjProps>(

        {
            destination: "Umuyi Hostel",
            location: "Main Administration Building",
            duration: {
                foot: 400 * 60 * 1000,
                bike: 18 * 60 * 1000,
                car: 6 * 60 * 1000,
            }
        })

    const handleLocate = () => {
        hideModal()
        return null
    }

    return (
        <div className="px-6">
            <Modal show={modalState} onClose={hideModal} popup position="center">
                <Modal.Header>
                </Modal.Header>
                <Modal.Body>
                    <NavModal onLocate={handleLocate} />
                </Modal.Body>
            </Modal>

            <div className="">
                <Button gradientMonochrome="teal" className='my-10' color="red-100" fullSized onClick={showModal}>
                    <span className=''>Locate somewhere</span>
                    <IoSearch className='ml-3' />
                </Button>
            </div>
            <Card>
                <ProcessedNavigation navigation={processedNavigation}></ProcessedNavigation>
            </Card>

            <div className="my-10">
                <h2 className="text-lg p-2 font-semibold">Recently Located</h2>
                <div className="bg-orange-800 text-white p-3 rounded-lg flex justify-between" >
                    <p>Biochemistry</p>  -&gt;  <p>Leture Theatre</p>
                </div>
            </div>
        </div>
    );
}

