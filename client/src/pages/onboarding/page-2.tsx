import { HiArrowRight } from 'react-icons/hi';
import logo from '../../assets/images/image 2.svg';

export default function PageTwo() {
    return (
        <main className="w-full min-h-[85vh] flex items-center flex-col justify-center transition-fade text-center px-6">
            <p className='w-full text-light my-10 text-xl font-light'>Your best bet on secured and affordable accommodation</p>
            <figure className="flex items-center w-1/3 object-contain my-4 justify-center ">
                <img src={logo} className="" alt="logo" />
            </figure>
            <div className="flex justify-end w-full mt-20">
                <div className='rounded-full px-8 py-2 ring-white text-light gap-3 flex items-center'>
                    <span className=''>Skip </span><HiArrowRight />
                </div>
            </div>
        </main>
    )
}
