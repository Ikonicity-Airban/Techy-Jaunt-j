import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import icon from "../../assets/images/icon.svg"
import image_1 from '../../assets/images/bedroom.svg';
import image_2 from '../../assets/images/image 3.svg';
import { useState } from 'react';

const onboardingData = [
    {
        text: "Your best bet on secured and affordable accommodation",
        imageUrl: image_1
    },
    {
        text: "Your are lost navigate your way through campus life",
        imageUrl: image_2
    },
    {
        text: "Looking for where to access wifi",
        imageUrl: image_2
    }
]


export default function OnBoardingPage() {
    const [pageNumber, setPageNumber] = useState(0)

    const handleNext = () => setPageNumber((prev) => prev < onboardingData.length - 1 ? prev + 1 : onboardingData.length - 1)
    const handlePrev = () => setPageNumber((prev) => prev > 0 ? prev - 1 : 0)


    return (
        <main className="w-full min-h-[85vh] flex items-center flex-col justify-between transition-fade text-center px-6">
            <div className="flex w-full h-[20vh]">
                <img src={icon} className="" alt="icon" />
            </div>
            <Page {...onboardingData[pageNumber]} index={pageNumber} />
            <div className="flex justify-between w-full">

                {pageNumber == 0 ||
                    <Button pill gradientMonochrome="teal" className='px-4' size="xs" onClick={handlePrev} disabled={pageNumber == 0}>
                        <HiArrowLeft className='mr-3' />
                        <span className=''>Prev </span>
                    </Button>
                }
                <div className="flex justify-end w-full">

                    {
                        pageNumber == onboardingData.length - 1 ?

                            <Link to="/login" replace className='px-4 ring-1 ring-white flex text-sm items-center rounded-full text-white' >
                                <span className=''>Get Started </span>
                                <HiArrowRight className='ml-3' />
                            </Link> : <Button pill gradientMonochrome="teal" className='px-4' size="xs" onClick={handleNext}>
                                <span className=''>Next </span>
                                <HiArrowRight className='ml-3' />
                            </Button>}
                </div>
            </div>
            <div className="flex gap-2 mt-10">
                {onboardingData.map((_, idx) => <span className='size-2 ring-white ring-1 rounded-full' style={{ backgroundColor: idx == pageNumber ? "white" : "transparent" }}></span>)}
            </div>
        </main >
    )
}


const Page = ({ imageUrl, text }: { imageUrl: string, text: string; index: number }) => {
    return (
        <div className='flex-1 flex flex-col items-center justify-evenly'>
            <p className='w-full text-light text-xl font-light'>
                {text}
            </p>
            <figure className="flex items-center w-1/3 h-auto object-contain justify-center">
                <img src={imageUrl} className="object-contain" alt="logo" />
            </figure>
        </div>)
}