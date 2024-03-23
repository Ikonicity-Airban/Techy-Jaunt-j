import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import { Link } from "react-router-dom";
import accImg from "../../assets/images/accSearch.jpg";
import icon from "../../assets/logo.svg";
import navigationImg from "../../assets/images/navigation.jpg";
import packages from "../../assets/images/package.jpg";
import { useState } from "react";

const onboardingData = [
  {
    text: "Your best bet on secured and affordable accommodation",
    imageUrl: accImg,
  },
  {
    text: "Your are lost navigate your way through campus life",
    imageUrl: navigationImg,
  },
  {
    text: "Looking for where to amazing packages",
    imageUrl: packages,
  },
];

export default function OnBoardingPage() {
  const [pageNumber, setPageNumber] = useState(0);

  const handleNext = () =>
    setPageNumber((prev) =>
      prev < onboardingData.length - 1 ? prev + 1 : onboardingData.length - 1
    );
  const handlePrev = () => setPageNumber((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <main className="min-h-[85vh] max-w-xl mx-auto flex items-center flex-col justify-between transition-fade text-center px-6 bg-[url('../../assets/images/navigation.jpg')] bg-cover">
      <div className="flex w-full h-[20vh] items-center">
        <img src={icon} className="h-20" alt="icon" />
      </div>
      <Page {...onboardingData[pageNumber]} index={pageNumber} />
      <div className="flex justify-between w-full">
        {pageNumber == 0 || (
          <button
            className="btn-neu-pop"
            onClick={handlePrev}
            disabled={pageNumber == 0}
          >
            <HiArrowLeft className="mr-3" />
            <span className="">Prev </span>
          </button>
        )}
        <div className="flex justify-end w-full">
          {pageNumber == onboardingData.length - 1 ? (
            <Link to="/login" replace className="btn-neu-pop bg-teal-100 text-teal-700">
              <span className="">Get Started </span>
              <HiArrowRight className="ml-3" />
            </Link>
          ) : (
            <button className="btn-neu-pop" onClick={handleNext}>
              <span className="">Next </span>
              <HiArrowRight className="ml-3" />
            </button>
          )}
        </div>
      </div>
      <div className="flex gap-2 mt-10">
        {onboardingData.map((_, idx) => (
          <span
            className="size-[7px] ring-white ring-1 rounded-full"
            style={{
              backgroundColor: idx == pageNumber ? "white" : "transparent",
            }}
          ></span>
        ))}
      </div>
    </main>
  );
}

const Page = ({
  imageUrl,
  text,
}: {
  imageUrl: string;
  text: string;
  index: number;
}) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-evenly my-10">
      <p className="w-full h-[10vh] text-light text-xl font-light">{text}</p>
      <figure className="flex items-center size-[240px] animate-bounce rounded-full overflow-hidden object-cover justify-center">
        <img src={imageUrl} className="object-cover w-full hover:scale-110 transition-transform duration-150 h-full" alt="logo" />
      </figure>
    </div>
  );
};
